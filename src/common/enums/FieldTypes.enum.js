"use strict";
exports.__esModule = true;
var FieldTypesEnum;
(function (FieldTypesEnum) {
    FieldTypesEnum["TEXT"] = "TEXT";
    FieldTypesEnum["TEXT_AREA"] = "TEXT_AREA";
    FieldTypesEnum["PASSWORD"] = "PASSWORD";
    FieldTypesEnum["SELECT"] = "SELECT";
    FieldTypesEnum["PICKLIST"] = "PICKLIST";
    FieldTypesEnum["CHECKBOX"] = "CHECKBOX";
    FieldTypesEnum["DATE"] = "DATE";
    FieldTypesEnum["DATE_TIME"] = "DATE_TIME";
    FieldTypesEnum["NUMBER"] = "NUMBER";
    FieldTypesEnum["INTEGER"] = "INTEGER";
    FieldTypesEnum["URL"] = "URL";
    FieldTypesEnum["PHONE"] = "PHONE";
    FieldTypesEnum["EMAIL"] = "EMAIL";
    FieldTypesEnum["SOQL_EDITOR"] = "SOQL_EDITOR";
    FieldTypesEnum["DROPDOWN_PANEL"] = "DROPDOWN_PANEL";
    FieldTypesEnum["RESULT_FILTER"] = "RESULT_FILTER";
    // Added to support https://www.mulesoft.org/jira/browse/CAPP-1705
    FieldTypesEnum["UPSERT_MATCHING"] = "UPSERT_MATCHING";
    FieldTypesEnum["DYNAMIC_MAPPER"] = "DYNAMIC_MAPPER";
    FieldTypesEnum["OBJECT_FORM"] = "OBJECT_FORM";
    FieldTypesEnum["TYPE_SELECTOR"] = "TYPE_SELECTOR";
    // Slack
    FieldTypesEnum["RICH_TEXT_EDITOR"] = "RichTextEditor";
    // Query Builder Types
    FieldTypesEnum["QUERY_BUILDER"] = "QUERY_BUILDER";
    FieldTypesEnum["FIELD_FILTER"] = "FIELD_FILTER";
    FieldTypesEnum["CONDITION_BUILDER"] = "CONDITION_BUILDER";
    FieldTypesEnum["CUSTOM_CONDITION"] = "CUSTOM_CONDITION";
    // List mapping
    FieldTypesEnum["ARRAY_FIELD"] = "arrayField";
    // XML object mapping
    FieldTypesEnum["XML_FIELD"] = "xmlField";
})(FieldTypesEnum || (FieldTypesEnum = {}));
exports["default"] = FieldTypesEnum;
