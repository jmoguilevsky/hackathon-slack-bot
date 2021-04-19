import { FlowSummaryList } from "../common/types/FlowProject";

export enum ActionIds {
    FlowDetails = 'flow-details'
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
                "text": flow.name
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
