import * as express from "express";
import FlowStatus from "../common/enums/FlowStatus.enum";
import { FlowSummaryList } from "../common/types/FlowProject";
import { ActionIds, flowListToBlocks, flowToBlocks, runHistoryToBlocks } from "../services/blocksTransformer";
import * as citizenApi from "../services/citizenApi";
import * as service from "../services/service";

const router = express.Router();

type Command = (
  value: string,
  channel: string,
  triggerId?: string,
) => Promise<{ text: string; blocks: unknown } | void>; // it outputs a blocks array

const defaultCommand: Command = async () => undefined;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commands: Record<ActionIds, Command> = {
  [ActionIds.FlowDetails]: async (flowId: string) => {
    // await service.sendMessage(
    //   channel,
    //   `<@${process.env.BOT_ID}> activate flow \`${flowId}\``,
    //   undefined,
    //   Date.now() / 1000 + 30,
    // );

    console.log(`fetching flow id ${flowId}`);
    const flow = await citizenApi.getFlowById(flowId);
    console.log("fetching connections");
    const connections = await citizenApi.getConnections();
    console.log("Got connections. Mapping to blocks...");
    const history = await citizenApi.getRunHistory(flowId, 1, 1);
    const flowLaunchUrl = await citizenApi.getLaunchUrlForFlow(flowId);
    const status = (await citizenApi.getFlowStatus(flowId)).status;
    console.log(`Got history. ${JSON.stringify(history, null, 4)}`);
    return {
      text: "Here is your flow",
      blocks: await flowToBlocks(flow, connections, flowLaunchUrl, status),
    };
  },
  [ActionIds.Activate]: async (flowId: string, channel: string) => {
    await citizenApi.executeFlowById(flowId);
    const flow = await citizenApi.getFlowById(flowId);
    await service.sendMessage(channel, `Starting "${flow.name}" :hourglass_flowing_sand:`);
    await pollForFlowStatus(flowId, FlowStatus.ACTIVE);

    return {
      text: `Flow "${flow.name}" has started :running:`,
      blocks: undefined,
    };
  },
  [ActionIds.Deactivate]: async (flowId: string, channel: string) => {
    await citizenApi.stopFlowById(flowId);
    const flow = await citizenApi.getFlowById(flowId);
    await service.sendMessage(channel, `Stopping "${flow.name}" :hourglass_flowing_sand:`);
    await pollForFlowStatus(flowId, FlowStatus.INACTIVE);
    return {
      text: `Flow "${flow.name}" has stopped :black_square_for_stop:`,
      blocks: undefined,
    };
  },
  [ActionIds.SeeRunHistory]: async (flowId: string) => {
    const flowLaunchUrl = await citizenApi.getLaunchUrlForFlow(flowId);
    const flowPromise = citizenApi.getFlowById(flowId);
    const runHistoryPromise = citizenApi.getRunHistory(flowId);
    const flow = await flowPromise;
    const history = await runHistoryPromise;
    return {
      text: `Run history for ${flow.name}`,
      blocks: runHistoryToBlocks(flow, history, flowLaunchUrl),
    };
  },
  [ActionIds.ScheduleActivation]: async (flowId, channel, triggerId) => {
    const modal = {
      title: {
        type: "plain_text",
        text: "Schedule Activation",
      },
      submit: {
        type: "plain_text",
        text: "Submit",
      },
      private_metadata: `${flowId}|${channel}`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Pick a date for the activation.",
          },
          accessory: {
            type: "datepicker",
            initial_date: "2021-04-21",
            placeholder: {
              type: "plain_text",
              text: "Select a date",
              emoji: true,
            },
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Pick a time for activation",
          },
          accessory: {
            type: "timepicker",
            initial_time: "13:00",
            placeholder: {
              type: "plain_text",
              text: "Select time",
              emoji: true,
            },
          },
        },
      ],
      type: "modal",
    };
    await service.openModal(modal, triggerId as string);
  },
};

router.get("/", (req, res) => res.send("Hello world!\n"));

router.post("/", async (req, res, next) => {
  const body = req.body;
  console.log(JSON.stringify(body));

  if (body.type === "url_verification") {
    res.json({ challenge: body?.challenge || "hardcoded-value" });
    return;
  }

  res.status(200).end(); // Tell slack this was received, process async

  if (body?.event?.bot_id) {
    console.log("Skipping event as it was posted by a bot", body.event.bot_id);
    return;
  }

  const text: string = body.event.text.trim().toLowerCase();
  const type: string = body.event.type;
  const channel: string = body.event.channel;

  if (!text) {
    console.log("Skipping as it has no text");
    return;
  }

  const botId = process.env.BOT_ID;
  if (!botId) {
    throw new Error("Missing BOT_ID");
  }

  const actionIdsRegex = `(${Object.values(ActionIds).join("|")})`;

  if (new RegExp(`^<@${botId}> ${actionIdsRegex} flow`, "i").test(text)) {
    const parts = text.trim().replace(/\s+/g, " ").split(" ");
    const actionId = parts[1];
    const flowId = parts[3].replace(/`/g, "");
    console.log("--------------------------------", actionId);
    const activateCommand = commands[actionId as ActionIds] || defaultCommand;
    return executeCommand(activateCommand, flowId, channel);
  }

  if (!text.includes(`<@${botId.toLowerCase()}>`) || type !== "message") {
    console.log("Skipping as message is not directed at us or it was not a message");
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedAction = (body.event.text as string).toLowerCase().trim().replace(/ +/g, " ");

  let flows: FlowSummaryList | undefined;
  try {
    flows = await citizenApi.getFlows({ pageSize: 5 });
  } catch (e) {
    console.error("Error fetching flows", e.stack);
    next(e);
    return;
  }

  try {
    service.sendMessage(channel, "Here are the flows", flows && flowListToBlocks(flows));
  } catch (error) {
    console.log("error", error.stack);
    next(error);
  }
});

// ---

router.post("/interactive-action", async (req, res, next) => {
  try {
    setTimeout(() => res.status(200).end(), 1500);

    const payload = JSON.parse(req.body.payload);
    console.log(JSON.stringify(req.body));
    const channel = payload.channel?.id;

    if (payload.type === "view_submission") {
      const values = payload.view?.state?.values;
      const metadataValues = payload.view?.private_metadata.split('|');
      const flowId = metadataValues[0];
      const channelId = metadataValues[1];
      console.log(values);
      console.log(metadataValues)
      console.log(flowId, channelId)
      // TODO: Execute reminder

      const stringified = JSON.stringify(payload.view.state.values as string);
      const date = stringified.match(/"type":"datepicker","selected_date":"([^"]*)"/)[1].split("-");
      const time = stringified.match(/"type":"timepicker","selected_time":"([^"]*)"/)[1].split(":");
      const timestamp = Date.parse(`${date} ${time}:00 GMT+0700`);
      await service.sendMessage(
        channel,
        `<@${process.env.BOT_ID}> activate flow \`${flowId}\``,
        undefined,
        timestamp / 1000,
      );
      return {
        text: `Flow \`flowId\` will be activated at ${date} ${time} (PDT)`,
      };
    }

    const triggerId = payload.trigger_id;

    const action: { action_id: ActionIds; value: string } = payload.actions?.[0] || {
      action_id: "default",
      value: null,
    };

    const command = commands[action.action_id] || defaultCommand;

    await executeCommand(command, action.value, channel, triggerId);
  } catch (e) {
    next(e);
  }
});

async function executeCommand(command: Command, value: string, channel: any, triggerId?: any) {
  const message = await command(value, channel, triggerId);

  if (message && (message.text || message.blocks)) {
    const { text, blocks } = message;
    await service.sendMessage(channel, text, blocks);
  }
}

async function pollForFlowStatus(flowId: string, desiredStatus: FlowStatus): Promise<void> {
  const flowStatus = await citizenApi.getFlowStatus(flowId);
  const isRunning = flowStatus.status === desiredStatus;
  if (isRunning) {
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return pollForFlowStatus(flowId, desiredStatus);
}

export default router;
