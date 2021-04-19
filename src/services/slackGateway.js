// const fetch = require('isomorphic-fetch');


// module.exports = function slackGateway() {

//   const token = process.env.TOKEN;
//   const baseUri = process.env.SLACK_API || 'https://slack.com/api';

//   const getUsername = (userId) => {
//     return fetch(`${baseUri}/users.info?token=${token}&user=${userId}`,{
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//       },
//     }).then(res => res.json())
//       .then(json => json.user.name);
//   }

//   const sendMessage = (channel, text, attachments=[]) => {
//     return fetch(`${baseUri}/chat.postMessage`, {
//       method:  'POST',
//       body:    JSON.stringify({text, channel, attachments}),
//       headers: {
//         'Authorization':    `Bearer ${token}`,
//         'Accept':           'application/json',
//         'Content-Type':     'application/json',
//         'X-Slack-No-Retry': 1
//       },
//     });
//   };

//   return {
//     getUsername,
//     sendMessage
//   };
// }
