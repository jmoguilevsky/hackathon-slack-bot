import * as express from "express";
import FlowStatus from "../common/enums/FlowStatus.enum";
import { FlowSummaryList } from "../common/types/FlowProject";
import { ActionIds, flowListToBlocks, flowToBlocks } from "../services/blocksTransformer";
import * as citizenApi from "../services/citizenApi";
import * as service from "../services/service";

const router = express.Router();

// const events = {
//   listFlows: "List flows" ,
//   describeFlow: 'Describe flows',
//   createFlow: 'Create Flow',
//   deleteFlow: 'Delete Flow',
//   cloneFlow: 'Clone Flow',
//   activateFlow: 'Activate Flow',
//   deactivateFlow: 'Deactivate Flow',
//   scheduleActivationFlow: 'Schedule Flow Activation',
//   scheduleDeactivationFlow: 'Schedule Flow Deactivation',
//   runHistory: 'Get Run History',
//   getLastExecutionErrors: 'Get Last Execution Errors',
//   subscribeToFlowEvents: 'Subscribe To Flow Events',
// }

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

  const { text, type } = body.event;
  if (!text) {
    console.log("Skipping as it has no text");
    return;
  }

  const botId = process.env.BOT_ID;
  if (!botId) {
    throw new Error("Missing BOT_ID");
  }
  if (!text.includes(`<@${botId}>`) || type !== "message") {
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

  const { channel } = body.event;
  try {
    service.sendMessage(channel, "Here are the flows", flows && flowListToBlocks(flows));
  } catch (error) {
    console.log("error", error.stack);
    next(error);
  }
});

// ---

type Command = (value: string, channel: string, triggerId: string) => Promise<{ text: string; blocks: unknown } | void>; // it outputs a blocks array

const defaultCommand: Command = async () => ({ text: "Default response", blocks: undefined });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commands: Record<ActionIds, Command> = {
  [ActionIds.FlowDetails]: async (flowId: string) => {
    console.log(`fetching flow id ${flowId}`);
    const flow = await citizenApi.getFlowById(flowId);
    console.log("fetching connections");
    const connections = await citizenApi.getConnections();
    console.log("Got connections. Mapping to blocks...");
    const history = await citizenApi.getRunHistory(flowId, 1, 1);
    const flowLaunchUrl = await citizenApi.getLaunchUrlForFlow(flowId);
    console.log(`Got history. ${JSON.stringify(history, null, 4)}`);
    return {
      text: "Here is your flow",
      blocks: await flowToBlocks(flow, connections, flowLaunchUrl),
    };
  },
  [ActionIds.Activate]: async (flowId: string, channel: string) => {
    await citizenApi.executeFlowById(flowId);
    const flow = await citizenApi.getFlowById(flowId);
    await service.sendMessage(channel, `Starting "${flow.name}" :loading:`);
    await pollForFlowStatus(flowId, FlowStatus.ACTIVE);

    return {
      text: `Flow "${flow.name}" has started :running:`,
      blocks: undefined,
    };
  },
  [ActionIds.Deactivate]: defaultCommand,
  // [ActionIds.Deactivate]: async (flowId: string) => {
  // },
  [ActionIds.SeeRunHistory]: defaultCommand,
  [ActionIds.ScheduleActivation]: async (flowId, name2, triggerId) => {
    const modal = {
      "title": {
        "type": "plain_text",
        "text": "Schedule Activation"
      },
      "submit": {
        "type": "plain_text",
        "text": "Submit"
      },
      "private_metadata": flowId,
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Pick a date for the activation."
          },
          "accessory": {
            "type": "datepicker",
            "initial_date": "2021-04-21",
            "placeholder": {
              "type": "plain_text",
              "text": "Select a date",
              "emoji": true
            }
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Pick a time for activation"
          },
          "accessory": {
            "type": "timepicker",
            "initial_time": "13:00",
            "placeholder": {
              "type": "plain_text",
              "text": "Select time",
              "emoji": true
            }
          }
        }
      ],
      "type": "modal"
    };
    await service.openModal(modal, triggerId);
  }
};

router.post("/interactive-action", async (req, res, next) => {
  try {
    setTimeout(() => res.status(200).end(), 1500);

    const payload = JSON.parse(req.body.payload);
    // console.log(inspect(payload, false, 10));

    if (payload.type === 'view_submission') {
      const values = payload.view?.state?.values;
      const flowId = payload.view?.private_metadata;
      console.log(values);
      console.log(flowId)
      // TODO: Execute reminder
      return;
    }

    const channel = payload.channel?.id;

    const triggerId = payload.trigger_id;

    const action: { action_id: ActionIds; value: string } = payload.actions?.[0] || {
      action_id: "default",
      value: null,
    };

    const command = commands[action.action_id] || defaultCommand;

    const message = await command(action.value, channel, triggerId);

    if (message && (message.text || message.blocks)) {
      const { text, blocks } = message;
      await service.sendMessage(channel, text, blocks);
    }
  } catch (e) {
    next(e);
  }
});

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
