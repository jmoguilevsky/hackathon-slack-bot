import * as express from 'express';
import * as path from 'path';
import * as OAS from 'express-openapi-validator';
const fetch = require('isomorphic-fetch');
require("dotenv").config();

const token = process.env.TOKEN;
const orgId = process.env.ORG_ID || "bf33dc0b-10a6-4f6b-9714-dd172737daeb";

const router = express.Router();


router.get('/', (req, res) => res.send('TEST: Hello world!\n'));

router.post('/', async (req, res) => {
  console.log(req.body);
  res.json({ ok: 'OK' });
  // const response = await service.process(req);
  // res.send(response);
});

router.get("/flow/", async (req, res) => {
  const result = await makeApiCall(
    `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/?pageIndex=1&pageSize=25&orderBy=updateDate`
  );
  res.send(result);
});
router.get("/flow/:flowId", async (req, res) => {
  const flowId = req.params.flowId;
  const flowUrl = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}?readOnly=true`;
  try {
    const result = await makeApiCall(flowUrl);
    // TODO: transform into text version of the flow (that can be sent back to Slack)
    //      - replacing things like the connection Id with the name

    /* 
        (http://localhost:3000/api/flow/29f9f245-3fac-4a06-833e-baacfdb3cdfe)

        Flow name: Adri's Flow
        Flow starts: when new Contact is created
        Then: 
        1. Create Contact in Salesforce
        2. If email is "capo@gmail.com" then:
            2a Create Contact in Salesforce
    */

    res.send(result);
  } catch (e) {
    res.send(e).status(500);
  }
});

export default router;

async function makeApiCall(url: string) {
  console.log(`querying ${url}`, token);
  const result = await fetch(url, {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      authorization: `bearer ${token}`,
      "cache-control": "no-cache, no-store, must-revalidate, proxy-revalidate",
      pragma: "no-cache",
      "x-requested-with": "XMLHttpRequest",
      "x-session-id": "d99b8f9e-63c9-4069-ba82-b8710885c89e",
    },
    referrer: "https://qax.composer.mulesoft.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  });

  return await result.json();
}