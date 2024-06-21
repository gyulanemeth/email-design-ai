export default {
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["box"]
    },
    "children": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "attrs": {
      "type": "object",
      "properties": {
        "hideOnDesktop": {
          "type": "boolean"
        },
        "hideOnMobile": {
          "type": "boolean"
        }
      },
      "required": ["hideOnDesktop", "hideOnMobile"]
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
          "enum": ["center top", "center center", "center bottom", "top left", "top right", "bottom left", "bottom right"]
        },
        "background-repeat": {
          "type": "string",
          "enum": ["repeat", "repeat-x", "repeat-y", "no-repeat"]
        },
        "border-radius": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "border-left": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "border-bottom": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "border-right": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "border-top": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "margin-left": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "margin-bottom": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "margin-right": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "margin-top": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "padding-left": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "padding-bottom": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "padding-right": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "padding-top": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        }
      },
      "required": [
        "background-color", "background-position", "background-repeat",
        "border-radius", "border-left", "border-bottom", "border-right",
        "border-top", "margin-left", "margin-bottom", "margin-right",
        "margin-top", "padding-left", "padding-bottom", "padding-right",
        "padding-top"
      ]
    }
  },
  "required": ["type", "children", "attrs", "style"]
}
