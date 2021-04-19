import * as fetch from "isomorphic-fetch";
import * as superagent from "superagent";

const token = process.env.TOKEN;
const baseUri = process.env.SLACK_API;

if (!token || !baseUri) {
  console.error('Missing environment variables TOKEN or SLACK_API');
}

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

export async function sendMessage(channel: string, text: string, blocks?: any) {
  console.log('Posting message to slack', channel, text);
  return superagent.post(`${baseUri}/chat.postMessage`)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json')
    .set('X-Slack-No-Retry', 1)
    .retry(0)
    .send({ text, channel, blocks: blocks || sampleBlocks });
}
