import ConditionCriterias from '../enums/ConditionCriterias.enum';
/* istanbul ignore next line */
import FieldTypesEnum from '../enums/FieldTypes.enum';
import OrderType from '../enums/OrderType.enum';
import { Condition } from './FlowProject';

type OrderBy = {
  field: string;
  order: OrderType;
};

type Criteria = {
  customCriteria: string;
};

export type Query = {
  objectType?: string;
  fields: Array<string>;
  criteriaSelection: ConditionCriterias;
  criteria: Criteria | null;
  conditions: Array<Condition>;
  limit?: number;
  orderBy?: OrderBy;
};

export interface ListFieldContent {
  source?: string;
  itemVar?: string;
  mapping?: Record<string, unknown>;
  value?: Array<string>;
}

// See https://docs.google.com/document/d/10Eh5uPmGnp-UO3COLa4r6CK31Rzi71RYAdgWW-KjIMQ
export interface ListFieldMapping {
  fieldType: FieldTypesEnum.ARRAY_FIELD;
  fieldContent: ListFieldContent;
}

export interface XMLFieldValue {
  name: string;
  attributes?: Record<string, string>;
  value: string | Array<XMLFieldValue> | ListFieldMapping;
}
export interface XMLFieldMapping {
  fieldType: FieldTypesEnum.XML_FIELD;
  fieldContent: XMLFieldValue;
}

/**
 * A list of paths that is used for the result filter.
 * Each element corresponds to the path of a type model property.
 */
export type PathList = Array<Array<string>>;

export type ValueByFieldType = {
  [FieldTypesEnum.TEXT]: string;
  [FieldTypesEnum.UPSERT_MATCHING]: string;
  [FieldTypesEnum.TEXT_AREA]: string;
  [FieldTypesEnum.PASSWORD]: string;
  [FieldTypesEnum.SELECT]: string;
  [FieldTypesEnum.PICKLIST]: string;
  [FieldTypesEnum.CHECKBOX]: boolean;
  [FieldTypesEnum.DATE]: string;
  [FieldTypesEnum.DATE_TIME]: string;
  [FieldTypesEnum.NUMBER]: string;
  [FieldTypesEnum.INTEGER]: number;
  [FieldTypesEnum.URL]: string;
  [FieldTypesEnum.PHONE]: string;
  [FieldTypesEnum.EMAIL]: string;
  [FieldTypesEnum.RESULT_FILTER]: PathList;
  // TODO: for now we assume that value is always string. Review it later
  [FieldTypesEnum.DYNAMIC_MAPPER]: Record<string, unknown>;
  [FieldTypesEnum.OBJECT_FORM]: { [key: string]: FieldValue };
  [FieldTypesEnum.TYPE_SELECTOR]: FieldValue;
  [FieldTypesEnum.QUERY_BUILDER]: Query;
  [FieldTypesEnum.CONDITION_BUILDER]: Array<Condition>;
};

export type FieldValue = (
  ValueByFieldType[Exclude<keyof ValueByFieldType, FieldTypesEnum.TYPE_SELECTOR>] | unknown | undefined | null
);
