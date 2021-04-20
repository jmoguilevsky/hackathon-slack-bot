import { ConnectionListResponse } from "../common/types/Connection";
import { FlowProject, FlowSummaryList } from "../common/types/FlowProject";
import { RunHistoryRecord } from "../common/types/RunHistory";
import * as fetch from "isomorphic-fetch";
import { FlowStatusResponse } from "../common/types/Design";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

interface TokenResponse {
  access_token: string;
}
interface GetFlowsOptions {
  pageSize: number;
}

class InMemoryCache {
  private storage: Map<string, any> = new Map();
  private get<T>(key: string): Promise<T> | undefined {
    return this.storage.get(key);
  }
  private set<T>(key: string, value: Promise<T>) {
    this.storage.set(key, value);
  }

  public async retrieve<T>(key: string, generator: () => Promise<T>): Promise<T> {
    const value = this.get<T>(key);
    if (value) {
      return value;
    }

    const promise = generator();
    this.set(key, promise);
    const result = await promise;
    return result;
  }
}
const cache = new InMemoryCache();

function getToken(): Promise<TokenResponse> {
  return cache.retrieve("token", () => login(process.env.USERNAME, process.env.PASSWORD));
}
function getOrgId() {
  return cache.retrieve("orgId", async () => {
    const token = await getToken();
    return getOrgIdUsingToken(token.access_token);
  });
}

export async function getFlows(options?: GetFlowsOptions): Promise<FlowSummaryList> {
  const pageSize = options?.pageSize || 10;
  const orgId = await getOrgId();
  const flowList = await makeApiCall<FlowSummaryList>(
    `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/?pageIndex=0&pageSize=${pageSize}&orderBy=-updateDate`,
  );

  const flowListWithExecutions = {
    results: await Promise.all(
      flowList.results.map(async (flow) => {
        if (flow.status.toUpperCase() === "ACTIVE") {
          const history = await getRunHistory(flow.id, 1, 1);
          flow.hasStatus = true;
          flow.hasError = !!(history && history.length && history[0].status === "FAILED");
        } else {
          flow.hasStatus = false;
        }
        return flow;
      }),
    ),
  };

  return flowListWithExecutions;
}

function btoa(str: string): string {
  // create buffer from string
  const binaryData = Buffer.from(str, "utf8");

  // decode buffer as base64
  return binaryData.toString("base64");
}

/**
 * get the launch URL for a given flow
 */
export async function getLaunchUrlForFlow(flowId: string): Promise<string> {
  const token = await getToken();
  const url = `https://qax.composer.mulesoft.com/silentLogin#access_token=${
    token.access_token
  }&token_type=bearer&state=${btoa(JSON.stringify({ flowId }))}`;
  // console.log(url);
  return url;
}

export async function executeFlowById(flowId: string): Promise<unknown> {
  // TODO return type
  const orgId = await getOrgId();
  const flow: FlowProject = await getFlowById(flowId);
  const url = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}/execute`;
  console.log("ACTIVATING", flowId);
  const response = await makeApiCall(url, "POST", JSON.stringify({ flow }));
  console.log("flow:", flow);
  console.log("RESPONSE", response);
  return response;
}

export async function stopFlowById(flowId: string): Promise<unknown> {
  // POST /id/stop, no body
  const orgId = await getOrgId();
  const url = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}/stop`;
  return makeApiCall(url, "POST", {});
}

export async function getFlowStatus(flowId: string): Promise<FlowStatusResponse> {
  const orgId = await getOrgId();
  const url = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}/status`;
  return await makeApiCall<FlowStatusResponse>(url);
}

export async function getFlowById(flowId: string): Promise<Readonly<FlowProject>> {
  const orgId = await getOrgId();
  const flowUrl = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}?readOnly=true`;
  return await cache.retrieve(flowUrl, () => makeApiCall<FlowProject>(flowUrl));
}

export async function getRunHistory(flowId: string, pageNumber = 1, pageSize = 14): Promise<Array<RunHistoryRecord>> {
  const orgId = await getOrgId();
  const url = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/flows/${flowId}/executionsummaries?page=${pageNumber}&pageSize=${pageSize}`;
  return await makeApiCall<Array<RunHistoryRecord>>(url);
}

export async function getConnections(): Promise<ConnectionListResponse> {
  const orgId = await getOrgId();
  const url = `https://citizen-platform-xapi-service.kqa.msap.io/api/v1/organizations/${orgId}/connections`;
  return await cache.retrieve(url, () => makeApiCall<ConnectionListResponse>(url));
}

async function makeApiCall<TResponse = any>(url: string, method = "GET", body: any = null): Promise<TResponse> {
  console.log(`querying ${url}`);
  const { access_token } = await getToken();
  const result = await fetch(url, {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      authorization: `bearer ${access_token}`,
      "cache-control": "no-cache, no-store, must-revalidate, proxy-revalidate",
      pragma: "no-cache",
      "x-requested-with": "XMLHttpRequest",
      "x-session-id": "d99b8f9e-63c9-4069-ba82-b8710885c89e",
      "content-type": "application/json",
    },
    referrer: "https://qax.composer.mulesoft.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body,
    method,
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

  console.log("grabbing token...");
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
  console.log("got token");

  return json;
}

async function getOrgIdUsingToken(token: string): Promise<string> {
  const url = `https://qax.anypoint.mulesoft.com/accounts/api/profile`;

  const result = await fetch(url, { headers: { Authorization: `bearer ${token}` } });

  const json = await result.json();
  console.log(`Logged into org id ${json?.organizationId}`);

  return json?.organizationId;
}
