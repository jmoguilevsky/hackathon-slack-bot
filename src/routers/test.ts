import * as express from 'express';
import * as path from 'path';
import * as OAS from 'express-openapi-validator';
import { FlowProject } from '../common/types/FlowProject';
import { getFlowById, getFlows } from '../services/citizenApi';
const fetch = require('isomorphic-fetch');
require("dotenv").config();

const router = express.Router();

router.get('/', (req, res) => res.send('TEST: Hello world!\n'));

router.post('/', async (req, res) => {
  console.log(req.body);
  res.json({ ok: 'OK' });
  // const response = await service.process(req);
  // res.send(response);
});

router.get("/flow/", async (req, res) => {
  try {
    const result = await getFlows();
    res.send(result);
  } catch (e) {
    res.send(e).status(500);
  }
});
router.get("/flow/:flowId", async (req, res) => {
  try {
    const result = await getFlowById(req.params.flowId);
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
