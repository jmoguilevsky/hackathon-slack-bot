// {
//   artifactId: "mule-salesforce-connector-platform-oauth"
//   groupId: "com.mulesoft.schemas"
//   schemaId: "ae3a114b-33d7-430f-bbac-629770ee1efe"
//   version: "1.0"
// }
export interface ConnectionSchema {
  id: string;
  artifactId: string;
  groupId: string;
  schemaId: string;
  version: string;
  labels: {
    connectionProvider: string;
    system: string;
    type: string;
  };
}

/* [
  {
  "id": "68b9cfa8-dc01-11ea-87d0-0242ac130003",
  "name": "My Salesforce connection",
  "connectorName": "salesforce",
  "labels": {
    "description": "This is my new Salesforce connection"
  },
  "schema": {
    "id": "ae3a114b-33d7-430f-bbac-629770ee1efe",
    "labels": {
      "system": "Salesforce",
      "type": "PlatformManagedOAuth",
      "connectionProvider": "platformManagedOauth"
    }
  }
  }
] */
export interface Connection {
  id: string;
  name: string;
  connectorName: string;
  labels?: {
    description: string;
  };
  // @TODO Remove partial
  schema: Partial<ConnectionSchema>;
  // Indicates the connection status based on test results: Not tested (undefined), value(true), invalid (false).
  isAvailable?: boolean;
}

// EXAMPLE NEEDED
export interface CreateRegularConnection {
  name: string;
  schemaId: string;
  labels?: {
    description?: string;
  };
  content: ConnectionContent;
  options: null;
}

export interface TestDraftRegularConnection {
  schemaId: string;
  connectorName: string;
  content: ConnectionContent;
}
export interface ConnectionContent {
  serverUrl?: string; // tableau
  personalAccessTokenName?: string; // tableau
  personalAccessTokenSecret?: string; // tableau
  contentUrl?: string; // tableau
  tenantName?: string; // workday
  userName?: string; // workday
  password?: string; // workday
}

// {
//   "name": "My Salesforce OAuth connection",
//   "schemaId": "0f200cf4-501d-44d2-8118-e560d2d78e1a",
//   "labels": {
//     "description": "This is my new Salesforce OCS connection"
//   },
//   "content": null,
//   "options": {
//     "callback": "http://localhost:8023"
//   }
// }'
export interface CreateOCSConnection {
  name: string;
  schemaId: string;
  connectorName: string;
  labels?: {
    description?: string;
  };
  contentOverride?: {
    sandbox?: boolean;
  };
  content?: null;
  options: {
    callback: string;
  };
}

export type CreateConnection = CreateRegularConnection | CreateOCSConnection;

export interface TestConnectionStatusResponse {
  success: boolean;
  errorInfo: {
    message: string;
  } | null;
}

export interface ConnectionStatus {
  id: string;
  connector: string;
  isAvailable: boolean;
}

export interface ConnectionInfo {
  connectionId: string;
  connectorName: string;
}

export interface ConnectionListResponse {
  data: Array<Connection>;
  total: number;
}
