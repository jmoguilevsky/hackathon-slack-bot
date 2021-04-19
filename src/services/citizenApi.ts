import { FlowProject, FlowSummaryList } from '../common/types/FlowProject';
const fetch = require('isomorphic-fetch');
require("dotenv").config();

interface TokenResponse { access_token: string };

// fetch initial value for token
const tokenPromise = login(process.env.USERNAME, process.env.PASSWORD);
const orgIdPromse: Promise<string> = tokenPromise.then(t => getOrgId(t.access_token));

export async function getFlows(): Promise<FlowSummaryList> {
    const orgId = await orgIdPromse;
    return await makeApiCall<FlowSummaryList>(
        `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/?pageIndex=1&pageSize=25&orderBy=updateDate`
    );
}

export async function getFlowById(flowId: string): Promise<FlowProject> {
    const orgId = await orgIdPromse;
    const flowUrl = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}`;
    return await makeApiCall<FlowProject>(flowUrl);
}

async function makeApiCall<TResponse = any>(url: string): Promise<TResponse> {
    console.log(`querying ${url}`);
    const { access_token } = await tokenPromise;
    const result = await fetch(url, {
        headers: {
            accept: "application/json",
            "accept-language": "en-US,en;q=0.9",
            authorization: `bearer ${access_token}`,
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

async function login(username?: string, password?: string): Promise<TokenResponse> {
    const url = `https://qax.anypoint.mulesoft.com/accounts/login`;

    if (!username || !password) {
        console.warn(`Missing username or password!`);
        return Promise.reject("no username/password");
    }
    
    console.log('grabbing token...');
    const response = await fetch(url, {
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            // "x-xsrf-token": csrfToken || "U5aXrbXI-wmzo38BAm53QuplImWowTbsag1I",
        },
        referrer: "https://qax.anypoint.mulesoft.com/",
        referrerPolicy: "origin",
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        method: "POST",
        mode: "cors",
        credentials: "include",
    });

    const json: { access_token: string } = await response.json();
    console.log('got token');

    return json;
}

async function getOrgId(token: string): Promise<string> {
    const url = `https://qax.anypoint.mulesoft.com/accounts/api/profile`;

    const result = await fetch(url, { headers: { Authorization: `bearer ${token}` } });

    const json = await result.json();
    console.log(`Logged into org id ${json?.organizationId}`);

    return json?.organizationId;
}