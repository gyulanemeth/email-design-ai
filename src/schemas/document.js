export default {
  "type": "object",
  "properties": {
    "body": {
      "type": "object",
      "properties": {
        "eid": {
          "type": "string",
          "enum": ["root"]
        },
        "type": {
          "type": "string",
          "enum": ["body"]
        },
        "children": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "attrs": {
          "type": "object"
        },
        "style": {
          "type": "object",
          "properties": {
            "background-color": {
              "type": "string",
              "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$|^rgba?\\((\\d{1,3},\\s*){2}\\d{1,3},\\s*([01]|0?\\.\\d+)\\)$|^transparent$"
            },
            "background-position": {
              "type": "string",
              "enum": ["center", "center center", "center top", "center bottom", "top left", "top right", "bottom left", "bottom right"]
            },
            "background-repeat": {
              "type": "string",
              "enum": ["repeat", "repeat-x", "repeat-y", "no-repeat"]
            },
            "body-width": {
              "type": "integer",
              "minimum": 0
            }
          },
          "required": ["background-color", "background-position", "background-repeat", "body-width"]
        }
      },
      "required": ["eid", "type", "children", "attrs", "style"]
    },
    "title": {
      "type": "string"
    },
    "previewText": {
      "type": "string"
    },
    "subjectLine": {
      "type": "string"
    },
    "version": {
      "type": "string",
      "enum": ["2.0.0"]
    }
  },
  "required": ["body", "title", "previewText", "subjectLine", "version"]
}
