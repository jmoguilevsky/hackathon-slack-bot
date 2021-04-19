import { FlowProject, FlowSummaryList } from "../common/types/FlowProject";

export enum ActionIds {
    FlowDetails = 'flow-details',
    Activate = 'activate',
    SeeRunHistory = 'see-run-history',
}

const ActionIdToLabel: Readonly<Record<ActionIds, string>> = {
    [ActionIds.Activate]: "Activate",
    [ActionIds.FlowDetails]: "Select",
    [ActionIds.SeeRunHistory]: "See run history"
}

function actionFactory(action: ActionIds) {
    return {
        "type": "button",
        "text": {
            "type": "plain_text",
            "text": ActionIdToLabel[action],
            "emoji": true
        },
        "value": "click_me_123",
        "action_id": action
    };
}

export function flowListToBlocks(flows: Readonly<FlowSummaryList>) {
    // turn into blocks
    return [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "Which flow would you like to see details for?"
            }
        },
        ...flows.results.map(flow => ({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": `*${flow.name}*\n_${flow.lastUpdatedDate}_`
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Select",
                    "emoji": true
                },
                "value": flow.id,
                "action_id": ActionIds.FlowDetails
            }
        }))
    ];
}

export function flowToBlocks(flow: FlowProject) {
    return [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": flow.name,
                "emoji": true
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*TRIGGER*: When a new *Contact* is created in salesforce :salesforce: (Org1)"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "A *Contact* is created in salesforce :salesforce: (Org1)"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*IF* Email equals `capo@gmail.com` *THEN*\n\tA *Contact* is created in salesforce :salesforce: (Org3)"
            }
        },
        {
            "type": "image",
            "image_url": "https://miro.medium.com/max/3840/1*h-ToKg2-sQf4H5aIGF3tlw.png",
            "alt_text": "inspiration"
        },
        {
            "type": "divider"
        },
        {
            "type": "actions",
            "elements": [
                actionFactory(ActionIds.Activate),
                actionFactory(ActionIds.SeeRunHistory)
            ]
        }
    ];
}