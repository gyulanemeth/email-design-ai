export default {
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["fullwidth"]
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
        "hideOnMobile": {
          "type": "boolean"
        },
        "hideOnDesktop": {
          "type": "boolean"
        },
        "lock": {
          "type": "boolean"
        },
        "marker": {
          "type": "string"
        }
      },
      "required": ["hideOnMobile", "hideOnDesktop", "lock", "marker"]
    },
    "style": {
      "type": "object",
      "properties": {
        "background-color": {
          "type": "string",
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$|^rgba?\\((\\d{1,3},\\s*){2}\\d{1,3},\\s*([01]|0?\\.\\d+)\\)$|^transparent$|^$"
        },
        "background-position": {
          "type": "string",
          "enum": ["center top", "center center", "center bottom", "top left", "top right", "bottom left", "bottom right"]
        },
        "background-repeat": {
          "type": "string",
          "enum": ["repeat", "repeat-x", "repeat-y", "no-repeat"]
        },
        "background-image": {
          "type": "string",
          "pattern": "^url\\((.*)\\)$"
        },
        "body-width": {
          "type": "integer",
          "minimum": 0
        },
        "content-width": {
          "type": "integer",
          "minimum": 0
        },
        "content-background-color": {
          "type": "string",
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$|^rgba?\\((\\d{1,3},\\s*){2}\\d{1,3},\\s*([01]|0?\\.\\d+)\\)$|^transparent$"
        },
        "content-background-repeat": {
          "type": "string",
          "enum": ["repeat", "repeat-x", "repeat-y", "no-repeat"]
        },
        "content-background-position": {
          "type": "string",
          "enum": ["center top", "center center", "center bottom", "top left", "top right", "bottom left", "bottom right"]
        },
        "content-background-image": {
          "type": "string",
          "pattern": "^url\\((.*)\\)$"
        },
        "content-margin-left": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-margin-bottom": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-margin-right": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-margin-top": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-padding-left": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-padding-bottom": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-padding-right": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-padding-top": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-border-radius": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "content-border-left": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "content-border-bottom": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "content-border-right": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "content-border-top": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem)?\\s+solid\\s+#(?:[0-9a-fA-F]{3}){1,2}$"
        }
      },
      "required": [
        "background-color", "background-position", "background-repeat", 
        "background-image", "body-width", "content-width", 
        "content-background-color", "content-background-repeat", 
        "content-background-position", "content-background-image", 
        "content-margin-left", "content-margin-bottom", "content-margin-right", 
        "content-margin-top", "content-padding-left", "content-padding-bottom", 
        "content-padding-right", "content-padding-top", "content-border-radius", 
        "content-border-left", "content-border-bottom", "content-border-right", 
        "content-border-top"
      ]
    }
  },
  "required": ["type", "children", "attrs", "style"]
}
