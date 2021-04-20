import { JSONPrimitiveValue } from "./JSON";

export type SampleDataValue = JSONPrimitiveValue | SampleDataObject | Array<SampleDataValue>;

export interface SampleDataProperty {
  name: string;
  value: SampleDataValue;
}

export interface SampleDataObject {
  [key: string]: SampleDataProperty;
}

/**
 * This is used for sample data and test messages.
 */
export interface OutputContent {
  output?: SampleDataValue;
  outputAttributes?: SampleDataValue;
}
