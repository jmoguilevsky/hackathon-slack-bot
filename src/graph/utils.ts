import StepTypesEnum from "../common/enums/StepTypes.enum";
import { Condition, ConditionalStep, ConditionBranch, ElseBranch, FlowProject, FlowSummaryList, Step } from "../common/types/FlowProject";

const flowExample: any = {
  "id": "29f9f245-3fac-4a06-833e-baacfdb3cdfe",
  "name": "Adri's alto flow",
  "description": "Mulesoft Composer flow",
  "type": "citizenbuilder",
  "ownerId": "Sil",
  "organizationId": "bf33dc0b-10a6-4f6b-9714-dd172737daeb",
  "connectors": [
    "salesforce"
  ],
  "trigger": {
    "name": "new-object-listener",
    "connector": "salesforce",
    "connectionId": "34f9bd1a-c46b-4885-a1a6-59836688f27a",
    "fieldValues": {
      "objectType": "Contact",
      "fields": [
        [
          "Email"
        ],
        [
          "FirstName"
        ],
        [
          "LastName"
        ]
      ]
    },
    "visibleFields": null,
    "hiddenFields": null,
    "dynamicOutput": {
      "description": "",
      "properties": [
        {
          "name": "Id",
          "label": "Id",
          "description": "",
          "typeModel": {
            "label": "Id",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "IsDeleted",
          "label": "IsDeleted",
          "description": "",
          "typeModel": {
            "label": "IsDeleted",
            "type": "BOOLEAN"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MasterRecordId",
          "label": "MasterRecordId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "AccountId",
          "label": "AccountId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastName",
          "label": "LastName",
          "description": "",
          "typeModel": {
            "label": "LastName",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "FirstName",
          "label": "FirstName",
          "description": "",
          "typeModel": {
            "label": "FirstName",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Salutation",
          "label": "Salutation",
          "description": "",
          "typeModel": {
            "label": "Salutation",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Name",
          "label": "Name",
          "description": "",
          "typeModel": {
            "label": "Name",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherStreet",
          "label": "OtherStreet",
          "description": "",
          "typeModel": {
            "label": "OtherStreet",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherCity",
          "label": "OtherCity",
          "description": "",
          "typeModel": {
            "label": "OtherCity",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherState",
          "label": "OtherState",
          "description": "",
          "typeModel": {
            "label": "OtherState",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherPostalCode",
          "label": "OtherPostalCode",
          "description": "",
          "typeModel": {
            "label": "OtherPostalCode",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherCountry",
          "label": "OtherCountry",
          "description": "",
          "typeModel": {
            "label": "OtherCountry",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherLatitude",
          "label": "OtherLatitude",
          "description": "",
          "typeModel": {
            "label": "OtherLatitude",
            "type": "NUMBER"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherLongitude",
          "label": "OtherLongitude",
          "description": "",
          "typeModel": {
            "label": "OtherLongitude",
            "type": "NUMBER"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherGeocodeAccuracy",
          "label": "OtherGeocodeAccuracy",
          "description": "",
          "typeModel": {
            "label": "OtherGeocodeAccuracy",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherAddress",
          "label": "OtherAddress",
          "description": "",
          "typeModel": {
            "description": "",
            "properties": [
              {
                "name": "city",
                "label": "City",
                "description": "",
                "typeModel": {
                  "label": "city",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "country",
                "label": "Country",
                "description": "",
                "typeModel": {
                  "label": "country",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "countryCode",
                "label": "CountryCode",
                "description": "",
                "typeModel": {
                  "label": "countryCode",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "latitude",
                "label": "Latitude",
                "description": "",
                "typeModel": {
                  "label": "latitude",
                  "type": "NUMBER"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "longitude",
                "label": "Longitude",
                "description": "",
                "typeModel": {
                  "label": "longitude",
                  "type": "NUMBER"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "postalCode",
                "label": "PostalCode",
                "description": "",
                "typeModel": {
                  "label": "postalCode",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "state",
                "label": "State",
                "description": "",
                "typeModel": {
                  "label": "state",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "stateCode",
                "label": "StateCode",
                "description": "",
                "typeModel": {
                  "label": "stateCode",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "street",
                "label": "Street",
                "description": "",
                "typeModel": {
                  "label": "street",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              }
            ],
            "label": "OtherAddress",
            "type": "OBJECT"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingStreet",
          "label": "MailingStreet",
          "description": "",
          "typeModel": {
            "label": "MailingStreet",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingCity",
          "label": "MailingCity",
          "description": "",
          "typeModel": {
            "label": "MailingCity",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingState",
          "label": "MailingState",
          "description": "",
          "typeModel": {
            "label": "MailingState",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingPostalCode",
          "label": "MailingPostalCode",
          "description": "",
          "typeModel": {
            "label": "MailingPostalCode",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingCountry",
          "label": "MailingCountry",
          "description": "",
          "typeModel": {
            "label": "MailingCountry",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingLatitude",
          "label": "MailingLatitude",
          "description": "",
          "typeModel": {
            "label": "MailingLatitude",
            "type": "NUMBER"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingLongitude",
          "label": "MailingLongitude",
          "description": "",
          "typeModel": {
            "label": "MailingLongitude",
            "type": "NUMBER"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingGeocodeAccuracy",
          "label": "MailingGeocodeAccuracy",
          "description": "",
          "typeModel": {
            "label": "MailingGeocodeAccuracy",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MailingAddress",
          "label": "MailingAddress",
          "description": "",
          "typeModel": {
            "description": "",
            "properties": [
              {
                "name": "city",
                "label": "City",
                "description": "",
                "typeModel": {
                  "label": "city",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "country",
                "label": "Country",
                "description": "",
                "typeModel": {
                  "label": "country",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "countryCode",
                "label": "CountryCode",
                "description": "",
                "typeModel": {
                  "label": "countryCode",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "latitude",
                "label": "Latitude",
                "description": "",
                "typeModel": {
                  "label": "latitude",
                  "type": "NUMBER"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "longitude",
                "label": "Longitude",
                "description": "",
                "typeModel": {
                  "label": "longitude",
                  "type": "NUMBER"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "postalCode",
                "label": "PostalCode",
                "description": "",
                "typeModel": {
                  "label": "postalCode",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "state",
                "label": "State",
                "description": "",
                "typeModel": {
                  "label": "state",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "stateCode",
                "label": "StateCode",
                "description": "",
                "typeModel": {
                  "label": "stateCode",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              },
              {
                "name": "street",
                "label": "Street",
                "description": "",
                "typeModel": {
                  "label": "street",
                  "type": "STRING"
                },
                "attributes": [
                  
                ],
                "repeatable": false
              }
            ],
            "label": "MailingAddress",
            "type": "OBJECT"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Phone",
          "label": "Phone",
          "description": "",
          "typeModel": {
            "label": "Phone",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Fax",
          "label": "Fax",
          "description": "",
          "typeModel": {
            "label": "Fax",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "MobilePhone",
          "label": "MobilePhone",
          "description": "",
          "typeModel": {
            "label": "MobilePhone",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "HomePhone",
          "label": "HomePhone",
          "description": "",
          "typeModel": {
            "label": "HomePhone",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OtherPhone",
          "label": "OtherPhone",
          "description": "",
          "typeModel": {
            "label": "OtherPhone",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "AssistantPhone",
          "label": "AssistantPhone",
          "description": "",
          "typeModel": {
            "label": "AssistantPhone",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "ReportsToId",
          "label": "ReportsToId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Email",
          "label": "Email",
          "description": "",
          "typeModel": {
            "label": "Email",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Title",
          "label": "Title",
          "description": "",
          "typeModel": {
            "label": "Title",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Department",
          "label": "Department",
          "description": "",
          "typeModel": {
            "label": "Department",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "AssistantName",
          "label": "AssistantName",
          "description": "",
          "typeModel": {
            "label": "AssistantName",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LeadSource",
          "label": "LeadSource",
          "description": "",
          "typeModel": {
            "label": "LeadSource",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Birthdate",
          "label": "Birthdate",
          "description": "",
          "typeModel": {
            "label": "Birthdate",
            "type": "DATE"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Description",
          "label": "Description",
          "description": "",
          "typeModel": {
            "label": "Description",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "OwnerId",
          "label": "OwnerId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "CreatedDate",
          "label": "CreatedDate",
          "description": "",
          "typeModel": {
            "label": "CreatedDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "CreatedById",
          "label": "CreatedById",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastModifiedDate",
          "label": "LastModifiedDate",
          "description": "",
          "typeModel": {
            "label": "LastModifiedDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastModifiedById",
          "label": "LastModifiedById",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "SystemModstamp",
          "label": "SystemModstamp",
          "description": "",
          "typeModel": {
            "label": "SystemModstamp",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastActivityDate",
          "label": "LastActivityDate",
          "description": "",
          "typeModel": {
            "label": "LastActivityDate",
            "type": "DATE"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastCURequestDate",
          "label": "LastCURequestDate",
          "description": "",
          "typeModel": {
            "label": "LastCURequestDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastCUUpdateDate",
          "label": "LastCUUpdateDate",
          "description": "",
          "typeModel": {
            "label": "LastCUUpdateDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastViewedDate",
          "label": "LastViewedDate",
          "description": "",
          "typeModel": {
            "label": "LastViewedDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "LastReferencedDate",
          "label": "LastReferencedDate",
          "description": "",
          "typeModel": {
            "label": "LastReferencedDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "EmailBouncedReason",
          "label": "EmailBouncedReason",
          "description": "",
          "typeModel": {
            "label": "EmailBouncedReason",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "EmailBouncedDate",
          "label": "EmailBouncedDate",
          "description": "",
          "typeModel": {
            "label": "EmailBouncedDate",
            "type": "DATE_TIME"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "IsEmailBounced",
          "label": "IsEmailBounced",
          "description": "",
          "typeModel": {
            "label": "IsEmailBounced",
            "type": "BOOLEAN"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "PhotoUrl",
          "label": "PhotoUrl",
          "description": "",
          "typeModel": {
            "label": "PhotoUrl",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Jigsaw",
          "label": "Jigsaw",
          "description": "",
          "typeModel": {
            "label": "Jigsaw",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "JigsawContactId",
          "label": "JigsawContactId",
          "description": "",
          "typeModel": {
            "label": "JigsawContactId",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "CleanStatus",
          "label": "CleanStatus",
          "description": "",
          "typeModel": {
            "label": "CleanStatus",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "IndividualId",
          "label": "IndividualId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Level__c",
          "label": "Level__c",
          "description": "",
          "typeModel": {
            "label": "Level__c",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        },
        {
          "name": "Languages__c",
          "label": "Languages__c",
          "description": "",
          "typeModel": {
            "label": "Languages__c",
            "type": "STRING"
          },
          "attributes": [
            
          ],
          "repeatable": false
        }
      ],
      "label": "Contact",
      "type": "OBJECT"
    },
    "dynamicOutputAttributes": null,
    "id": "2160d64b-8de9-44e1-82e7-78031836909e",
    "type": "TRIGGER",
    "displayName": "Tremendo trigger"
  },
  "steps": [
    {
      "dynamicFields": [
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "AccountId",
          "label": "AccountId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "LastName",
          "label": "LastName",
          "description": "",
          "typeModel": {
            "label": "LastName",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": true,
          "visible": true,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "FirstName",
          "label": "FirstName",
          "description": "",
          "typeModel": {
            "label": "FirstName",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Salutation",
          "label": "Salutation",
          "description": "",
          "typeModel": {
            "label": "Salutation",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "SELECT",
          "supportsExpression": true,
          "dataProvider": {
            "name": null,
            "options": [
              {
                "value": "Mr.",
                "label": "Mr."
              },
              {
                "value": "Ms.",
                "label": "Ms."
              },
              {
                "value": "Mrs.",
                "label": "Mrs."
              },
              {
                "value": "Dr.",
                "label": "Dr."
              },
              {
                "value": "Prof.",
                "label": "Prof."
              }
            ]
          }
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherStreet",
          "label": "OtherStreet",
          "description": "",
          "typeModel": {
            "label": "OtherStreet",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherCity",
          "label": "OtherCity",
          "description": "",
          "typeModel": {
            "label": "OtherCity",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherState",
          "label": "OtherState",
          "description": "",
          "typeModel": {
            "label": "OtherState",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherPostalCode",
          "label": "OtherPostalCode",
          "description": "",
          "typeModel": {
            "label": "OtherPostalCode",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherCountry",
          "label": "OtherCountry",
          "description": "",
          "typeModel": {
            "label": "OtherCountry",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherLatitude",
          "label": "OtherLatitude",
          "description": "",
          "typeModel": {
            "label": "OtherLatitude",
            "type": "NUMBER"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "NUMBER",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherLongitude",
          "label": "OtherLongitude",
          "description": "",
          "typeModel": {
            "label": "OtherLongitude",
            "type": "NUMBER"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "NUMBER",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherGeocodeAccuracy",
          "label": "OtherGeocodeAccuracy",
          "description": "",
          "typeModel": {
            "label": "OtherGeocodeAccuracy",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "SELECT",
          "supportsExpression": true,
          "dataProvider": {
            "name": null,
            "options": [
              {
                "value": "Address",
                "label": "Address"
              },
              {
                "value": "NearAddress",
                "label": "NearAddress"
              },
              {
                "value": "Block",
                "label": "Block"
              },
              {
                "value": "Street",
                "label": "Street"
              },
              {
                "value": "ExtendedZip",
                "label": "ExtendedZip"
              },
              {
                "value": "Zip",
                "label": "Zip"
              },
              {
                "value": "Neighborhood",
                "label": "Neighborhood"
              },
              {
                "value": "City",
                "label": "City"
              },
              {
                "value": "County",
                "label": "County"
              },
              {
                "value": "State",
                "label": "State"
              },
              {
                "value": "Unknown",
                "label": "Unknown"
              }
            ]
          }
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingStreet",
          "label": "MailingStreet",
          "description": "",
          "typeModel": {
            "label": "MailingStreet",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingCity",
          "label": "MailingCity",
          "description": "",
          "typeModel": {
            "label": "MailingCity",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingState",
          "label": "MailingState",
          "description": "",
          "typeModel": {
            "label": "MailingState",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingPostalCode",
          "label": "MailingPostalCode",
          "description": "",
          "typeModel": {
            "label": "MailingPostalCode",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingCountry",
          "label": "MailingCountry",
          "description": "",
          "typeModel": {
            "label": "MailingCountry",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingLatitude",
          "label": "MailingLatitude",
          "description": "",
          "typeModel": {
            "label": "MailingLatitude",
            "type": "NUMBER"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "NUMBER",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingLongitude",
          "label": "MailingLongitude",
          "description": "",
          "typeModel": {
            "label": "MailingLongitude",
            "type": "NUMBER"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "NUMBER",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MailingGeocodeAccuracy",
          "label": "MailingGeocodeAccuracy",
          "description": "",
          "typeModel": {
            "label": "MailingGeocodeAccuracy",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "SELECT",
          "supportsExpression": true,
          "dataProvider": {
            "name": null,
            "options": [
              {
                "value": "Address",
                "label": "Address"
              },
              {
                "value": "NearAddress",
                "label": "NearAddress"
              },
              {
                "value": "Block",
                "label": "Block"
              },
              {
                "value": "Street",
                "label": "Street"
              },
              {
                "value": "ExtendedZip",
                "label": "ExtendedZip"
              },
              {
                "value": "Zip",
                "label": "Zip"
              },
              {
                "value": "Neighborhood",
                "label": "Neighborhood"
              },
              {
                "value": "City",
                "label": "City"
              },
              {
                "value": "County",
                "label": "County"
              },
              {
                "value": "State",
                "label": "State"
              },
              {
                "value": "Unknown",
                "label": "Unknown"
              }
            ]
          }
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Phone",
          "label": "Phone",
          "description": "",
          "typeModel": {
            "label": "Phone",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Fax",
          "label": "Fax",
          "description": "",
          "typeModel": {
            "label": "Fax",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "MobilePhone",
          "label": "MobilePhone",
          "description": "",
          "typeModel": {
            "label": "MobilePhone",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "HomePhone",
          "label": "HomePhone",
          "description": "",
          "typeModel": {
            "label": "HomePhone",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OtherPhone",
          "label": "OtherPhone",
          "description": "",
          "typeModel": {
            "label": "OtherPhone",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "AssistantPhone",
          "label": "AssistantPhone",
          "description": "",
          "typeModel": {
            "label": "AssistantPhone",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "ReportsToId",
          "label": "ReportsToId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Email",
          "label": "Email",
          "description": "",
          "typeModel": {
            "label": "Email",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": true,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Title",
          "label": "Title",
          "description": "",
          "typeModel": {
            "label": "Title",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Department",
          "label": "Department",
          "description": "",
          "typeModel": {
            "label": "Department",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "AssistantName",
          "label": "AssistantName",
          "description": "",
          "typeModel": {
            "label": "AssistantName",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "LeadSource",
          "label": "LeadSource",
          "description": "",
          "typeModel": {
            "label": "LeadSource",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "SELECT",
          "supportsExpression": true,
          "dataProvider": {
            "name": null,
            "options": [
              {
                "value": "Web",
                "label": "Web"
              },
              {
                "value": "Phone Inquiry",
                "label": "Phone Inquiry"
              },
              {
                "value": "Partner Referral",
                "label": "Partner Referral"
              },
              {
                "value": "Purchased List",
                "label": "Purchased List"
              },
              {
                "value": "Other",
                "label": "Other"
              }
            ]
          }
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Birthdate",
          "label": "Birthdate",
          "description": "",
          "typeModel": {
            "label": "Birthdate",
            "type": "DATE"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "DATE",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Description",
          "label": "Description",
          "description": "",
          "typeModel": {
            "label": "Description",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "OwnerId",
          "label": "OwnerId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "EmailBouncedReason",
          "label": "EmailBouncedReason",
          "description": "",
          "typeModel": {
            "label": "EmailBouncedReason",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "EmailBouncedDate",
          "label": "EmailBouncedDate",
          "description": "",
          "typeModel": {
            "label": "EmailBouncedDate",
            "type": "DATE_TIME"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "DATE_TIME",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Jigsaw",
          "label": "Jigsaw",
          "description": "",
          "typeModel": {
            "label": "Jigsaw",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "CleanStatus",
          "label": "CleanStatus",
          "description": "",
          "typeModel": {
            "label": "CleanStatus",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "SELECT",
          "supportsExpression": true,
          "dataProvider": {
            "name": null,
            "options": [
              {
                "value": "Matched",
                "label": "Matched"
              },
              {
                "value": "Different",
                "label": "Different"
              },
              {
                "value": "Acknowledged",
                "label": "Acknowledged"
              },
              {
                "value": "NotFound",
                "label": "NotFound"
              },
              {
                "value": "Inactive",
                "label": "Inactive"
              },
              {
                "value": "Pending",
                "label": "Pending"
              },
              {
                "value": "SelectMatch",
                "label": "SelectMatch"
              },
              {
                "value": "Skipped",
                "label": "Skipped"
              }
            ]
          }
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "IndividualId",
          "label": "IndividualId",
          "description": "",
          "typeModel": {
            "label": "String",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Level__c",
          "label": "Level__c",
          "description": "",
          "typeModel": {
            "label": "Level__c",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": false,
          "componentType": "SELECT",
          "supportsExpression": true,
          "dataProvider": {
            "name": null,
            "options": [
              {
                "value": "Secondary",
                "label": "Secondary"
              },
              {
                "value": "Tertiary",
                "label": "Tertiary"
              },
              {
                "value": "Primary",
                "label": "Primary"
              }
            ]
          }
        },
        {
          "repeatable": false,
          "attributes": null,
          "changesDynamicInput": false,
          "changesDynamicOutput": false,
          "changesSampleData": false,
          "providesType": false,
          "typeProvider": null,
          "affects": [
            
          ],
          "affectedBy": [
            
          ],
          "subtypes": [
            
          ],
          "definedBy": null,
          "name": "Languages__c",
          "label": "Languages__c",
          "description": "",
          "typeModel": {
            "label": "Languages__c",
            "type": "STRING"
          },
          "defaultValue": null,
          "required": false,
          "visible": true,
          "componentType": "TEXT",
          "supportsExpression": true,
          "dataProvider": null
        }
      ],
      "dynamicInput": null,
      "entityTypes": null,
      "name": "createRecord",
      "connector": "salesforce",
      "connectionId": "e96e1bb5-b309-4ac3-a9f9-55b2e248773a",
      "fieldValues": {
        "objectType": "Contact",
        "record": {
          "Languages__c": "`Spanish`",
          "Email": "step.2160d64b-8de9-44e1-82e7-78031836909e.output[\"Email\"]",
          "LastName": "`Sr $(step.2160d64b-8de9-44e1-82e7-78031836909e.output[\"LastName\"])`"
        }
      },
      "visibleFields": null,
      "hiddenFields": null,
      "dynamicOutput": {
        "description": "",
        "properties": [
          {
            "name": "id",
            "label": "Id",
            "description": "",
            "typeModel": {
              "label": "String",
              "type": "STRING"
            },
            "attributes": [
              
            ],
            "repeatable": false
          }
        ],
        "label": "org.mule.extension.salesforce.internal.operation.citizen.SimpleResult",
        "type": "OBJECT"
      },
      "dynamicOutputAttributes": null,
      "id": "9f7168e0-fd32-4807-94b8-631944d1c6fb",
      "type": "ACTION",
      "displayName": null
    },
    {
      "conditionsBranches": [
        {
          "criteria": "AND",
          "conditions": [
            {
              "field": "step.2160d64b-8de9-44e1-82e7-78031836909e.output[\"Email\"]",
              "operator": "equals",
              "value": "`capo@gmail.com`"
            }
          ],
          "displayName": null,
          "id": "3e51f8f4-5d0f-46a8-9137-e5fa1dce9cb3",
          "steps": [
            {
              "dynamicFields": [
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "AccountId",
                  "label": "AccountId",
                  "description": "",
                  "typeModel": {
                    "label": "String",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "LastName",
                  "label": "LastName",
                  "description": "",
                  "typeModel": {
                    "label": "LastName",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": true,
                  "visible": true,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "FirstName",
                  "label": "FirstName",
                  "description": "",
                  "typeModel": {
                    "label": "FirstName",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Salutation",
                  "label": "Salutation",
                  "description": "",
                  "typeModel": {
                    "label": "Salutation",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "SELECT",
                  "supportsExpression": true,
                  "dataProvider": {
                    "name": null,
                    "options": [
                      {
                        "value": "Mr.",
                        "label": "Mr."
                      },
                      {
                        "value": "Ms.",
                        "label": "Ms."
                      },
                      {
                        "value": "Mrs.",
                        "label": "Mrs."
                      },
                      {
                        "value": "Dr.",
                        "label": "Dr."
                      },
                      {
                        "value": "Prof.",
                        "label": "Prof."
                      }
                    ]
                  }
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherStreet",
                  "label": "OtherStreet",
                  "description": "",
                  "typeModel": {
                    "label": "OtherStreet",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherCity",
                  "label": "OtherCity",
                  "description": "",
                  "typeModel": {
                    "label": "OtherCity",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherState",
                  "label": "OtherState",
                  "description": "",
                  "typeModel": {
                    "label": "OtherState",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherPostalCode",
                  "label": "OtherPostalCode",
                  "description": "",
                  "typeModel": {
                    "label": "OtherPostalCode",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherCountry",
                  "label": "OtherCountry",
                  "description": "",
                  "typeModel": {
                    "label": "OtherCountry",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherLatitude",
                  "label": "OtherLatitude",
                  "description": "",
                  "typeModel": {
                    "label": "OtherLatitude",
                    "type": "NUMBER"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "NUMBER",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherLongitude",
                  "label": "OtherLongitude",
                  "description": "",
                  "typeModel": {
                    "label": "OtherLongitude",
                    "type": "NUMBER"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "NUMBER",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherGeocodeAccuracy",
                  "label": "OtherGeocodeAccuracy",
                  "description": "",
                  "typeModel": {
                    "label": "OtherGeocodeAccuracy",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "SELECT",
                  "supportsExpression": true,
                  "dataProvider": {
                    "name": null,
                    "options": [
                      {
                        "value": "Address",
                        "label": "Address"
                      },
                      {
                        "value": "NearAddress",
                        "label": "NearAddress"
                      },
                      {
                        "value": "Block",
                        "label": "Block"
                      },
                      {
                        "value": "Street",
                        "label": "Street"
                      },
                      {
                        "value": "ExtendedZip",
                        "label": "ExtendedZip"
                      },
                      {
                        "value": "Zip",
                        "label": "Zip"
                      },
                      {
                        "value": "Neighborhood",
                        "label": "Neighborhood"
                      },
                      {
                        "value": "City",
                        "label": "City"
                      },
                      {
                        "value": "County",
                        "label": "County"
                      },
                      {
                        "value": "State",
                        "label": "State"
                      },
                      {
                        "value": "Unknown",
                        "label": "Unknown"
                      }
                    ]
                  }
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingStreet",
                  "label": "MailingStreet",
                  "description": "",
                  "typeModel": {
                    "label": "MailingStreet",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingCity",
                  "label": "MailingCity",
                  "description": "",
                  "typeModel": {
                    "label": "MailingCity",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingState",
                  "label": "MailingState",
                  "description": "",
                  "typeModel": {
                    "label": "MailingState",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingPostalCode",
                  "label": "MailingPostalCode",
                  "description": "",
                  "typeModel": {
                    "label": "MailingPostalCode",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingCountry",
                  "label": "MailingCountry",
                  "description": "",
                  "typeModel": {
                    "label": "MailingCountry",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingLatitude",
                  "label": "MailingLatitude",
                  "description": "",
                  "typeModel": {
                    "label": "MailingLatitude",
                    "type": "NUMBER"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "NUMBER",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingLongitude",
                  "label": "MailingLongitude",
                  "description": "",
                  "typeModel": {
                    "label": "MailingLongitude",
                    "type": "NUMBER"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "NUMBER",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MailingGeocodeAccuracy",
                  "label": "MailingGeocodeAccuracy",
                  "description": "",
                  "typeModel": {
                    "label": "MailingGeocodeAccuracy",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "SELECT",
                  "supportsExpression": true,
                  "dataProvider": {
                    "name": null,
                    "options": [
                      {
                        "value": "Address",
                        "label": "Address"
                      },
                      {
                        "value": "NearAddress",
                        "label": "NearAddress"
                      },
                      {
                        "value": "Block",
                        "label": "Block"
                      },
                      {
                        "value": "Street",
                        "label": "Street"
                      },
                      {
                        "value": "ExtendedZip",
                        "label": "ExtendedZip"
                      },
                      {
                        "value": "Zip",
                        "label": "Zip"
                      },
                      {
                        "value": "Neighborhood",
                        "label": "Neighborhood"
                      },
                      {
                        "value": "City",
                        "label": "City"
                      },
                      {
                        "value": "County",
                        "label": "County"
                      },
                      {
                        "value": "State",
                        "label": "State"
                      },
                      {
                        "value": "Unknown",
                        "label": "Unknown"
                      }
                    ]
                  }
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Phone",
                  "label": "Phone",
                  "description": "",
                  "typeModel": {
                    "label": "Phone",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Fax",
                  "label": "Fax",
                  "description": "",
                  "typeModel": {
                    "label": "Fax",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "MobilePhone",
                  "label": "MobilePhone",
                  "description": "",
                  "typeModel": {
                    "label": "MobilePhone",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "HomePhone",
                  "label": "HomePhone",
                  "description": "",
                  "typeModel": {
                    "label": "HomePhone",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OtherPhone",
                  "label": "OtherPhone",
                  "description": "",
                  "typeModel": {
                    "label": "OtherPhone",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "AssistantPhone",
                  "label": "AssistantPhone",
                  "description": "",
                  "typeModel": {
                    "label": "AssistantPhone",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "ReportsToId",
                  "label": "ReportsToId",
                  "description": "",
                  "typeModel": {
                    "label": "String",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Email",
                  "label": "Email",
                  "description": "",
                  "typeModel": {
                    "label": "Email",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Title",
                  "label": "Title",
                  "description": "",
                  "typeModel": {
                    "label": "Title",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Department",
                  "label": "Department",
                  "description": "",
                  "typeModel": {
                    "label": "Department",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "AssistantName",
                  "label": "AssistantName",
                  "description": "",
                  "typeModel": {
                    "label": "AssistantName",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "LeadSource",
                  "label": "LeadSource",
                  "description": "",
                  "typeModel": {
                    "label": "LeadSource",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "SELECT",
                  "supportsExpression": true,
                  "dataProvider": {
                    "name": null,
                    "options": [
                      {
                        "value": "Web",
                        "label": "Web"
                      },
                      {
                        "value": "Phone Inquiry",
                        "label": "Phone Inquiry"
                      },
                      {
                        "value": "Partner Referral",
                        "label": "Partner Referral"
                      },
                      {
                        "value": "Purchased List",
                        "label": "Purchased List"
                      },
                      {
                        "value": "Other",
                        "label": "Other"
                      }
                    ]
                  }
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Birthdate",
                  "label": "Birthdate",
                  "description": "",
                  "typeModel": {
                    "label": "Birthdate",
                    "type": "DATE"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "DATE",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Description",
                  "label": "Description",
                  "description": "",
                  "typeModel": {
                    "label": "Description",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "OwnerId",
                  "label": "OwnerId",
                  "description": "",
                  "typeModel": {
                    "label": "String",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "EmailBouncedReason",
                  "label": "EmailBouncedReason",
                  "description": "",
                  "typeModel": {
                    "label": "EmailBouncedReason",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "EmailBouncedDate",
                  "label": "EmailBouncedDate",
                  "description": "",
                  "typeModel": {
                    "label": "EmailBouncedDate",
                    "type": "DATE_TIME"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "DATE_TIME",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Jigsaw",
                  "label": "Jigsaw",
                  "description": "",
                  "typeModel": {
                    "label": "Jigsaw",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "CleanStatus",
                  "label": "CleanStatus",
                  "description": "",
                  "typeModel": {
                    "label": "CleanStatus",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "SELECT",
                  "supportsExpression": true,
                  "dataProvider": {
                    "name": null,
                    "options": [
                      {
                        "value": "Matched",
                        "label": "Matched"
                      },
                      {
                        "value": "Different",
                        "label": "Different"
                      },
                      {
                        "value": "Acknowledged",
                        "label": "Acknowledged"
                      },
                      {
                        "value": "NotFound",
                        "label": "NotFound"
                      },
                      {
                        "value": "Inactive",
                        "label": "Inactive"
                      },
                      {
                        "value": "Pending",
                        "label": "Pending"
                      },
                      {
                        "value": "SelectMatch",
                        "label": "SelectMatch"
                      },
                      {
                        "value": "Skipped",
                        "label": "Skipped"
                      }
                    ]
                  }
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "IndividualId",
                  "label": "IndividualId",
                  "description": "",
                  "typeModel": {
                    "label": "String",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Level__c",
                  "label": "Level__c",
                  "description": "",
                  "typeModel": {
                    "label": "Level__c",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "SELECT",
                  "supportsExpression": true,
                  "dataProvider": {
                    "name": null,
                    "options": [
                      {
                        "value": "Secondary",
                        "label": "Secondary"
                      },
                      {
                        "value": "Tertiary",
                        "label": "Tertiary"
                      },
                      {
                        "value": "Primary",
                        "label": "Primary"
                      }
                    ]
                  }
                },
                {
                  "repeatable": false,
                  "attributes": null,
                  "changesDynamicInput": false,
                  "changesDynamicOutput": false,
                  "changesSampleData": false,
                  "providesType": false,
                  "typeProvider": null,
                  "affects": [
                    
                  ],
                  "affectedBy": [
                    
                  ],
                  "subtypes": [
                    
                  ],
                  "definedBy": null,
                  "name": "Languages__c",
                  "label": "Languages__c",
                  "description": "",
                  "typeModel": {
                    "label": "Languages__c",
                    "type": "STRING"
                  },
                  "defaultValue": null,
                  "required": false,
                  "visible": false,
                  "componentType": "TEXT",
                  "supportsExpression": true,
                  "dataProvider": null
                }
              ],
              "dynamicInput": null,
              "entityTypes": null,
              "name": "createRecord",
              "connector": "salesforce",
              "connectionId": "e96e1bb5-b309-4ac3-a9f9-55b2e248773a",
              "fieldValues": {
                "objectType": "Contact",
                "record": {
                  "LastName": "`Alto capo`"
                }
              },
              "visibleFields": null,
              "hiddenFields": null,
              "dynamicOutput": {
                "description": "",
                "properties": [
                  {
                    "name": "id",
                    "label": "Id",
                    "description": "",
                    "typeModel": {
                      "label": "String",
                      "type": "STRING"
                    },
                    "attributes": [
                      
                    ],
                    "repeatable": false
                  }
                ],
                "label": "org.mule.extension.salesforce.internal.operation.citizen.SimpleResult",
                "type": "OBJECT"
              },
              "dynamicOutputAttributes": null,
              "id": "c79d18c2-11e2-4ab9-873e-b05696eb698e",
              "type": "ACTION",
              "displayName": null
            }
          ]
        }
      ],
      "elseBranch": null,
      "id": "4487043a-8923-4d91-8312-7c2ac63d9258",
      "type": "CONDITIONAL",
      "displayName": null
    }
  ],
  "createdDate": "2021-03-23T13:55:19.319Z",
  "lastUpdatedDate": "2021-03-23T14:29:24.276Z",
  "modelVersion": "1.0"
};

const styles = ".flow-decision-tree{box-sizing:border-box;outline:0;margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;justify-content:space-around;width:100%;text-align:center;font-size:2vw}.flow-decision-tree *,.flow-decision-tree ::after,.flow-decision-tree ::before{box-sizing:border-box;outline:0;margin:0;padding:0;list-style:none}.flow-decision-tree ul{display:flex;align-items:flex-start;justify-content:space-around;position:relative;padding:0}.flow-decision-tree ul:after{content:'';position:absolute;top:0;left:50%;height:10px;border-left:1px solid #d3d3d3}.flow-decision-tree>ul{padding:0}.flow-decision-tree li{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;padding:20px 10px 0 10px}.flow-decision-tree li:before{content:'';position:absolute;top:10px;width:100%;border-top:1px solid #d3d3d3}.flow-decision-tree li:after{content:'';position:absolute;top:10px;left:50%;height:10px;border-left:1px solid #d3d3d3}.flow-decision-tree li:first-child:before{left:50%;width:50%}.flow-decision-tree li:last-child:before{right:50%;width:50%}.flow-decision-tree li:only-child:before{display:none}.flow-decision-tree>li{padding:0}.flow-decision-tree>li:after,.flow-decision-tree>li:before{display:none}.icon{width:50px;height:50px;background-size:contain;background-repeat:no-repeat;background-position:center;margin:5px}"

function getFlowHTMLStructure(flow: FlowProject) {
  return `<html><style>${styles}</style><body><ul class="flow-decision-tree">${getStepHTMLStructure([flow.trigger, ...flow.steps])}</ul></body></html>`
}

function getStepHTMLStructure(stepList: Array<Step>): string {
  if (!stepList || stepList.length < 1) {
    return '';
  }
  const [step, ...nextSteps] = stepList;
  if (step.type === StepTypesEnum.ACTION || step.type === StepTypesEnum.TRIGGER ) {
    return `<li><div role="img" class="icon" style="background-image: url(${__dirname}/icons/${step.connector}.png);"></div><ul>${getStepHTMLStructure(nextSteps)}</ul></li>`
  }
  if (step.type === StepTypesEnum.CONDITIONAL) {
    const branches = step.conditionsBranches.map((branch) => getStepHTMLStructure(branch.steps)).join('');
    return `<li><div role="img" class="icon" style="background-image: url(./src/graph/icons/choice.png);"></div><ul>${branches}</ul></li>`
  }
  return '';
}


const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');

const dirname = __dirname;
const salesforceImg = fs.readFileSync(`${dirname}/icons/salesforce.png`);
// @ts-ignore
const salesforceBase64 = new Buffer.from(salesforceImg).toString('base64');
const salesforceUrI = 'data:image/jpeg;base64,' + salesforceBase64

nodeHtmlToImage({
  output: './image.png',
  html: getFlowHTMLStructure(flowExample),
  content: { salseforceSource: salesforceUrI }
}).then(() => console.log('The image was created successfully!'))
