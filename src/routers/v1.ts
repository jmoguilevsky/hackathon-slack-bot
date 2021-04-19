import * as express from 'express';
import * as service from '../services/service';
import * as citizenApi from "../services/citizenApi";
import { ActionIds, flowListToBlocks, flowToBlocks } from '../services/blocksTransformer';
import { FlowSummaryList } from '../common/types/FlowProject';
import { inspect } from 'util';
import { getFlowById } from '../services/citizenApi';

const router = express.Router();

const events = {
  listFlows: 'List flows',
  describeFlow: 'Describe flows',
  createFlow: 'Create Flow',
  deleteFlow: 'Delete Flow',
  cloneFlow: 'Clone Flow',
  activateFlow: 'Activate Flow',
  deactivateFlow: 'Deactivate Flow',
  scheduleActivationFlow: 'Schedule Flow Activation',
  scheduleDeactivationFlow: 'Schedule Flow Deactivation',
  runHistory: 'Get Run History',
  getLastExecutionErrors: 'Get Last Execution Errors',
  subscribeToFlowEvents: 'Subscribe To Flow Events',
}

router.get('/', (req, res) => res.send('Hello world!\n'));

router.post('/', async (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body));

  if (body.type === "url_verification") {
    res.json({ challenge: body?.challenge || 'hardcoded-value' });
    return;
  }

  res.status(200).end(); // Tell slack this was received, process async

  if (body?.event?.bot_id) {
    console.log('Skipping event as it was posted by a bot', body.event.bot_id);
    return;
  }

  if (!(body.event.text as string).includes('<@U01V54MAS49>')) {
    console.log('Skipping as message is not directed at us');
    return;
  }

  const selectedAction = (body.event.text as string).toLowerCase().trim().replace(/ +/g, ' ');

  let flows: FlowSummaryList | undefined;
  try {
    flows = await citizenApi.getFlows();
  } catch (e) {
    console.error('Error fetching flows', e.stack);
  }

  const { channel } = body.event;
  try {
    service.sendMessage(channel, 'This is a test', flows && flowListToBlocks(flows));
  } catch (error) {
    console.log('error', error.stack);
  }
});

router.post('/interactive-action', async (req, res) => {
  const payload = JSON.parse(req.body.payload);
  console.log(inspect(payload, false, 10));

  const channel = payload.channel.id;
  if (payload.actions?.[0]?.action_id === ActionIds.FlowDetails) {
    const flowId = payload.actions[0].value;
    console.log(`fetching flow id ${flowId}`);
    const flow = await getFlowById(flowId);
    service.sendMessage(channel, JSON.stringify(payload), flowToBlocks(flow));
  } else {
    service.sendMessage(channel, JSON.stringify(payload), []);
  }
  res.status(200).end();
});

export default router;


const commands = {
  'list flows': {
    data: citizenApi.getFlows,
    format: flowListToBlocks
  },
  'describe flows': {
    data: citizenApi.getFlowById,
    format: (x) => x
  }
}
