const express = require("express");
const https = require(`https`);
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const port = 3000;
const token = process.env.TOKEN;
const orgId = process.env.ORG_ID || "bf33dc0b-10a6-4f6b-9714-dd172737daeb";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/flow/", async (req, res) => {
  const result = await makeApiCall(
    `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/?pageIndex=1&pageSize=25&orderBy=updateDate`
  );
  res.send(result);
});
app.get("/api/flow/:flowId", async (req, res) => {
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
    res.send(result).status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function makeApiCall(url) {
  console.log(`querying ${url}`);
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
