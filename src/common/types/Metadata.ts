import DataTypesEnum from '../enums/DataTypes.enum';
import FieldTypesEnum from '../enums/FieldTypes.enum';
import { FieldValue } from './FieldValue';

export interface DataProviderResult {
  value: FieldValue;
  label: string;
}

export interface FieldDataProvider {
  name: string;
  options?: Array<DataProviderResult>;
}

export interface Field {
  name: string;
  description: string;
  required: boolean;
  typeModel: TypeModel;
  label: string;
  componentType: FieldTypesEnum;
  visible: boolean;
  dataProvider?: FieldDataProvider | null;
  defaultValue?: FieldValue;

  attributes?: Array<Field>;

  /** Exclusive for Type Selector components */
  subtypes?: Array<Field>;
  supportsExpression: boolean;
  changesDynamicOutput: boolean;
  changesDynamicInput: boolean;
  changesSampleData?: boolean;
  affects: Array<string>;
  affectedBy: Array<string>;
  // Query Builder props
  /** When true, typeProvider matches id of objectType obtained with FieldDataProvider */
  providesType?: boolean;
  typeProvider?: string | null;
}

export interface ArrayItemModel {
  typeModel: TypeModel;
  label: string;
  description: string;
  componentType?: FieldTypesEnum;
}

/**
 * It extends from field only if it is inside of dynamic fields. There is an ask to backend to fix conceptions mix.
 */
export interface ObjectProperty extends Partial<Field> {
  name: string;
  label: string;
  typeModel: TypeModel;
  description: string;
  /** If true - should be treated as array of this property */
  repeatable?: boolean;
}

export interface TypeModel {
  label: string;
  type: DataTypesEnum;
  description?: string;
  /** Array item model */
  itemModel?: ArrayItemModel;
  /** Nested object properties */
  properties?: Array<ObjectProperty>;
}

export interface Metadata {
  inputFields: Record<string, Array<Field>>;
  output: TypeModel;
  outputAttributes: TypeModel;
}
