export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["multicolumn"]
    },
    "children": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "eid": { "type": "string" },
          "type": {
            "type": "string",
            "enum": ["column"]
          },
          "children": { "type": "array", "items": { "type": "object" } },
          "attrs": {
            "type": "object",
            "properties": {
              "hideOnMobile": { "type": "boolean" },
              "lock": { "type": "boolean" }
            },
            "required": ["hideOnMobile", "lock"]
          },
          "style": {
            "type": "object",
            "properties": {
              "width": { "type": "string" },
              "background-color": { "type": "string" },
              "background-position": { "type": "string" },
              "background-repeat": { "type": "string" },
              "background-image": { "type": "string" }
            },
            "required": ["width", "background-color", "background-position", "background-repeat", "background-image"]
          }
        },
        "required": ["eid", "type", "children", "attrs", "style"]
      }
    },
    "attrs": {
      "type": "object",
      "properties": {
        "stacking": { "type": "string" },
        "hideOnMobile": { "type": "boolean" },
        "spacerBefore": { "type": "string" },
        "spacerBetween": { "type": "string" },
        "spacerAfter": { "type": "string" },
        "spacerBeforeMobile": { "type": "string" },
        "spacerBetweenMobile": { "type": "string" },
        "spacerAfterMobile": { "type": "string" }
      },
      "required": [
        "stacking",
        "hideOnMobile",
        "spacerBefore",
        "spacerBetween",
        "spacerAfter",
        "spacerBeforeMobile",
        "spacerBetweenMobile",
        "spacerAfterMobile"
      ]
    },
    "style": {
      "type": "object",
      "properties": {
        "background-color": { "type": "string" },
        "background-position": { "type": "string" },
        "background-repeat": { "type": "string" },
        "background-image": { "type": "string" }
      },
      "required": ["background-color", "background-position", "background-repeat", "background-image"]
    }
  },
  "required": ["children", "attrs", "style"]
}
