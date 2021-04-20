import FlowStatus from "../enums/FlowStatus.enum";
import TestStatus from "../enums/TestStatus.enum";
import { OutputContent } from "./SampleData";

export interface FlowStatusResponse {
  status: FlowStatus;
}

export interface TestStatusResponse {
  testStatus: TestStatus;
}

export interface TestResult {
  /**
   * This is null when execution failed before this step
   */
  [stepId: string]: TestMessage | null;
}

export type TestMessage = EventTestMessage | ForEachTestMessage | ConditionalTestMessage | FailedTestMessage;

export interface TestMessageError {
  detailedDescription: string;
}

export interface FailedTestMessage {
  error: TestMessageError;
}

export type EventTestMessage = OutputContent;

export interface ForEachTestMessage {
  iterations: Array<TestResult>;
}

export interface ConditionalTestMessage {
  branches: {
    /**
     * This is null when condition was not matched (meaning this step was not run)
     */
    [branchId: string]: BranchTestMessage | null;
  };
}

export interface BranchTestMessage {
  steps: TestResult;
}
