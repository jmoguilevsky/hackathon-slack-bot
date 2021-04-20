import * as express from "express";
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
    flows = await citizenApi.getFlows();
  } catch (e) {
    console.error("Error fetching flows", e.stack);
    next(e);
    return;
  }

  const { channel } = body.event;
  try {
    service.sendMessage(channel, "This is a test", flows && flowListToBlocks(flows));
  } catch (error) {
    console.log("error", error.stack);
    next(error);
  }
});

// ---

interface Command {
  dataFn: (value: string) => Promise<any>;
  formatFn: (data: any) => unknown; // it outputs a blocks array
}

const defaultCommand: Command = {
  dataFn: async () => undefined,
  formatFn: () => undefined,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commands: Record<ActionIds, Command> = {
  [ActionIds.FlowDetails]: {
    dataFn: citizenApi.getFlowById,
    formatFn: flowToBlocks,
  },
  [ActionIds.Activate]: defaultCommand,
  [ActionIds.SeeRunHistory]: defaultCommand,
};

router.post("/interactive-action", async (req, res, next) => {
  try {
    setTimeout(() => res.status(200).end(), 1500);

    const payload = JSON.parse(req.body.payload);
    // console.log(inspect(payload, false, 10));

    const channel = payload.channel.id;
    if (payload.actions?.[0]?.action_id === ActionIds.FlowDetails) {
      const flowId = payload.actions[0].value;
      console.log(`fetching flow id ${flowId}`);
      const flow = await getFlowById(flowId);
      const connections = await citizenApi.getConnections();
      const flowBlocks = await flowToBlocks(flow,connections);
      service.sendMessage(channel, 'This is an action', flowBlocks);
      return;
    }

    const action: { action_id: ActionIds; value: string } = payload.actions?.[0] || {
      action_id: "default",
      value: null,
    };

    const { dataFn, formatFn } = commands[action.action_id] || defaultCommand;

    const blocks = formatFn(await dataFn(action.value));

    service.sendMessage(channel, "This is an action", blocks);
  } catch (e) {
    next(e);
  }
});

export default router;
