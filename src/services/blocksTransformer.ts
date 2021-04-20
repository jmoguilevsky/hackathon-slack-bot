import { Connection, ConnectionListResponse } from "../common/types/Connection";
import {
  Condition,
  ConditionalStep,
  ConditionBranch,
  ElseBranch,
  FlowProject,
  FlowSummary,
  FlowSummaryList,
  Step,
} from "../common/types/FlowProject";
import { createFlowImage } from "../utils/imageCreator";

export enum ActionIds {
  FlowDetails = "flow-details",
  Activate = "activate",
  SeeRunHistory = "see-run-history",
}

const ActionIdToLabel: Readonly<Record<ActionIds, string>> = {
  [ActionIds.Activate]: "Activate",
  [ActionIds.FlowDetails]: "Select",
  [ActionIds.SeeRunHistory]: "See run history",
};

function actionFactory(action: ActionIds) {
  return {
    type: "button",
    text: {
      type: "plain_text",
      text: ActionIdToLabel[action],
      emoji: true,
    },
    value: "click_me_123",
    action_id: action,
  };
}

export function flowListToBlocks(flows: Readonly<FlowSummaryList>): unknown {
  // turn into blocks
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Which flow would you like to see details for?",
      },
    },
    ...flows.results.map((flow) => ({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${flow.name}*\n*_${flow.status}${buildStatus(flow)}_* _Last updated: ${flow.lastUpdatedDate}_`,
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Select",
          emoji: true,
        },
        value: flow.id,
        action_id: ActionIds.FlowDetails,
      },
    })),
  ];
}

function buildStatus(flow: Readonly<FlowSummary>): string {
  if (!flow.hasStatus) {
    return "";
  }
  return flow.hasError ? " :x:" : " :white_check_mark:";
}

export async function flowToBlocks(flow: FlowProject, connections: ConnectionListResponse): Promise<any> {
  const flowBlocks = await getFlowBlocks(flow, connections);
  return [
    ...flowBlocks,
    {
      type: "actions",
      elements: [actionFactory(ActionIds.Activate), actionFactory(ActionIds.SeeRunHistory)],
    },
  ];
}

interface ConnectionById {
  [connectionId: string]: Connection;
}

function getConnectionsById(connections: ConnectionListResponse): ConnectionById {
  return connections.data.reduce<ConnectionById>((map, connection) => {
    map[connection.id] = connection;
    return map;
  }, {});
}

const stepDescriptionByName: Record<string, (...t: any) => string> = {
  "new-object-listener": ({ objectType }: { objectType: string }) => `*TRIGGER*: When a new *${objectType}* is created`,
  "modified-object-listener": ({ objectType }: { objectType: string }) =>
    `*TRIGGER*: When a *${objectType}* is created or updated`,
  "deleted-object-listener": ({ objectType }: { objectType: string }) => `*TRIGGER*: When a *${objectType}* is deleted`,
  createRecord: ({ objectType }: { objectType: string }) => `A *${objectType}* is created`,
  updateRecord: ({ objectType }: { objectType: string }) => `A *${objectType}* is updated`,
  query: ({ salesforceQuery: { objectType, conditions } }) =>
    `All *${objectType}* ${conditions.length ? "where asdas equals AND bla equals 3" : ""} are fetched`,
  upsertRecord: ({ objectType }: { objectType: string }) => `A *${objectType}* is created or updated`,
  deleteRecord: ({ objectType }: { objectType: string }) => `A *${objectType}* is deleted`,
  createSpreadsheetRow: ({ spreadsheetId, worksheetName }) =>
    `A new row is created in spreadsheet ${spreadsheetId} in worksheet ${worksheetName}`,
  postMessageToChannelCitizen: ({ channelName }) => `Post a message to ${channelName}`,
};

function getDescriptionForStepName(step: Step): string {
  const name = step.name;
  if (name && name in stepDescriptionByName) {
    return stepDescriptionByName[name](step.fieldValues);
  }

  return `unknown: "${step.name}"`;
}

const pillRegex = /(step|foreach).[a-f0-9-]+(.[a-z]+)*(\["[\s\w{}:.]+"\])?/gi;
const regex = /\[.*?\]/g;

function getDataPillValue(value: any): string {
  if (pillRegex.test(value)) {
    return value.match(regex).join("").replace('["', "").replace('"]', "");
  }
  return value;
}

function getConditionDescription(condition: Condition) {
  return `${getDataPillValue(condition.field)} ${condition.operator} ${getDataPillValue(condition.value)}`;
}

function getBranchConditions(branch: ConditionBranch) {
  return branch.conditions?.map(getConditionDescription).join(branch.criteria);
}

function getIfBranchDescription(branch: ConditionBranch, connectionsById: ConnectionById, nestedTimes: number): string {
  return `*IF* ${getBranchConditions(branch)} *THEN*\n ${getStepsDescription(
    branch.steps,
    connectionsById,
    nestedTimes + 1,
  )}`;
}

function getElseBranchDescription(branch: ElseBranch, connectionsById: ConnectionById, nestedTimes: number): string {
  if (!branch.steps) {
    return "";
  }
  return `*ELSE*: If none of the previous conditions apply *THEN* ${getStepsDescription(
    branch.steps,
    connectionsById,
    nestedTimes + 1,
  ).join("")}`;
}

function getConditionalDescription(step: ConditionalStep, connectionsById: ConnectionById, nestedTimes: number) {
  let description = step.conditionsBranches
    .map((branch) => getIfBranchDescription(branch, connectionsById, nestedTimes))
    .join("");
  if (step.elseBranch) {
    description += getElseBranchDescription(step.elseBranch, connectionsById, nestedTimes);
  }
  return description;
}

function getStepsDescription(steps: Array<Step>, connectionsById: ConnectionById, nestedTimes = 0) {
  return steps.reduce<Array<string>>((descriptions, step) => {
    if (step.type === "CONDITIONAL") {
      const conditionalDes = getConditionalDescription(step as ConditionalStep, connectionsById, nestedTimes);
      return [...descriptions, `${"\t".repeat(nestedTimes)}${conditionalDes}`];
    }
    if (step.name) {
      const connection = step.connectionId ? connectionsById[step.connectionId] : null;
      if (!connection) {
        console.warn(`unable to find connection id ${step.connectionId}`);
      }
      const stepDes = `${getDescriptionForStepName(step)} in ${step.connector} :${step.connector}: (${
        connection?.name
      })\n`;
      return [...descriptions, `${"\t".repeat(nestedTimes)}${stepDes}`];
    }
    return descriptions;
  }, []);
}

export async function getFlowBlocks(flow: FlowProject, connections: ConnectionListResponse): Promise<any> {
  const connectionsById = getConnectionsById(connections);
  const flowDescriptionBlocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: flow.name,
        emoji: true,
      },
    },
  ];
  const stepsDescription = getStepsDescription([flow.trigger, ...flow.steps], connectionsById).map((description) => ({
    type: "section",
    text: {
      type: "mrkdwn",
      text: description,
    },
  }));

  await createFlowImage(flow);
  console.log(`${process.env.SERVER_URI}/static/${flow.name?.replace(/ /g, "_")}.png`);
  const flowImage = {
    type: "image",
    title: {
      type: "plain_text",
      text: flow.name,
      emoji: true,
    },
    image_url: `${process.env.SERVER_URI}/static/${flow.name?.replace(/ /g, "_")}.png`,
    alt_text: "inspiration",
  };
  const divider = {
    type: "divider",
  };
  return [...flowDescriptionBlocks, ...stepsDescription, divider, flowImage];
}

// function getFlowSimplifiedSteps(steps: Array<Step>) {
//     return steps.map((step) => {
//         if (step.type === 'ACTION' || step.type === 'trigger') {
//             return { logo: step.connector };
//         }
//         if (step.type === 'CONDITIONAL') {
//             return { logo: 'condition', branches: (step as ConditionalStep).conditionsBranches.map(branch => ({ condition: getBranchConditions(branch), steps: getFlowSimplifiedSteps(branch.steps) })) }
//         }
//     })
// }
//console.log(JSON.stringify(mapFlowDescription(exampleFlow)));
//console.log(JSON.stringify(getFlowSimplifiedSteps(exampleFlow.steps)))
