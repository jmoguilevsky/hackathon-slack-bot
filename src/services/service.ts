import { inspect } from "util";
import * as superagent from "superagent";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export async function sendMessage(
  channel: string,
  text: string,
  blocks?: unknown,
  post_at?: number,
): Promise<superagent.Response> {
  const token = process.env.TOKEN;
  const baseUri = process.env.SLACK_API;

  if (!token || !baseUri) {
    throw new Error("Missing environment variables TOKEN or SLACK_API");
  }

  console.log("Posting message to slack", channel, text);
  return superagent
    .post(`${baseUri}/chat.${post_at ? "scheduleMessage" : "postMessage"}`)
    .set({
      Authorization: `Bearer ${token}`,
      "X-Slack-No-Retry": 1,
    })
    .retry(0)
    .send({ text, channel, blocks, post_at })
    .then((response: superagent.Response) => {
      console.log("Slack responded with", response.status, response.body, channel, text, inspect(blocks, false, 10));
      return response;
    });
}

export async function openModal(view: unknown, triggerId: string): Promise<superagent.Response> {
  const token = process.env.TOKEN;
  const baseUri = process.env.SLACK_API;

  if (!token || !baseUri) {
    throw new Error("Missing environment variables TOKEN or SLACK_API");
  }

  return superagent
    .post(`${baseUri}/views.open`)
    .set({
      Authorization: `Bearer ${token}`,
      "X-Slack-No-Retry": 1,
    })
    .retry(0)
    .send({ trigger_id: triggerId, view })
    .then((response: superagent.Response) => {
      console.log("Slack responded with:", response);
      return response;
    });
}

/*
const sampleBlocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Which flow would you like to see details for?"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "My first flow"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Select",
        "emoji": true
      },
      "value": "click_me_123",
      "action_id": "button-action"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "My second flow name here"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Select",
        "emoji": true
      },
      "value": "flowId:abc-123",
      "action_id": "button-action"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "My second flow name here"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Select",
        "emoji": true
      },
      "value": "flowId:abc-123",
      "action_id": "button-action"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "My second flow name here"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Select",
        "emoji": true
      },
      "value": "flowId:abc-123",
      "action_id": "button-action"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "My second flow name here"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Select",
        "emoji": true
      },
      "value": "flowId:abc-123",
      "action_id": "button-action"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "This is a section block with a button."
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Select",
        "emoji": true
      },
      "value": "click_me_123",
      "action_id": "CustomAction"
    }
  }
];
*/
