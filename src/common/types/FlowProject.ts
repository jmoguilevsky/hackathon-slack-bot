import StepTypesEnum from "../enums/StepTypes.enum";
import ConditionCriteriaTypesEnum from "../enums/ConditionCriterias.enum";
import { Field, TypeModel } from "./Metadata";
import { FieldValue } from "./FieldValue";

// TODO: add correct definition
export interface ConditionBranch {
  id: string;
  displayName?: string;
  steps: Array<Step>;
  conditions?: Array<Condition>;
  criteria?: ConditionCriteriaTypesEnum;
}

export interface ElseBranch {
  id: string;
  displayName?: string;
  steps: Array<Step>;
}

interface BaseStep {
  id: string;
  type?: StepTypesEnum;
  /**
   * This name corresponds to a name of ConnectorAction or ConnectorTrigger.
   */
  name?: string;
  displayName?: string;
  connectionId?: string | null;
  connector?: string;
  fieldValues?: Record<string, FieldValue>;
  dynamicFields?: Array<Field>;
  dynamicOutput?: TypeModel;
  dynamicOutputAttributes?: TypeModel;
  entityTypes?: Record<string, TypeModel>;
}

export interface EmptyStep extends BaseStep {
  /**
   * Empty step doesn't have a type.
   */
  type?: never;
}

export interface TriggerStep extends BaseStep {
  type: StepTypesEnum.TRIGGER;
}

export interface ActionStep extends BaseStep {
  type: StepTypesEnum.ACTION;
}

export interface ConditionalStep extends BaseStep {
  type: StepTypesEnum.CONDITIONAL;
  conditionsBranches: Array<ConditionBranch>;
  elseBranch: ElseBranch | null;
}

export interface ForEachStep extends BaseStep {
  type: StepTypesEnum.FOREACH;
  /**
   * The data pill expression of the collection to iterate
   */
  input: string;
  /**
   * Steps to execute on each list item
   */
  steps: Array<Step>;
}

export type EventStep = TriggerStep | ActionStep;

export type Step = EmptyStep | EventStep | ConditionalStep | ForEachStep;

export type FlowSteps = [FlowProject["trigger"], ...FlowProject["steps"]];

export interface FlowProject {
  id?: string;
  type: string;
  name?: string;
  description?: string;
  connectors?: Array<string>;
  trigger: TriggerStep | EmptyStep; // TODO: Use null instead of EmptyStep
  steps: Array<Step>;
  lastUpdatedDate?: string;
  createdDate?: string;
  modelVersion: string;
}

export interface Condition {
  field: string;
  operator: string;
  value: unknown;
}

// TODO: remove everything below
export interface FlowSummary {
  id: string;
  name: string;
  status: string;
  lastUpdatedDate: Date;
  hasError?: boolean;
  hasStatus?: boolean;
}

export interface FlowSummaryList {
  results: Array<FlowSummary>;
}

export interface CreateFlowRequest {
  name: string;
}

export interface CreateFlowResponse {
  flowId: string;
}
