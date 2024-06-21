export default {
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["image"]
    },
    "attrs": {
      "type": "object",
      "properties": {
        "mini": {
          "type": "boolean"
        },
        "sizeType": {
          "type": "string",
          "enum": ["FIXED"]
        },
        "link": {
          "type": "string",
          "format": "uri"
        },
        "lockDimensions": {
          "type": "object",
          "properties": {
            "width": {
              "type": ["null", "string"]
            },
            "height": {
              "type": ["null", "string"]
            }
          },
          "required": ["width", "height"]
        },
        "altText": {
          "type": "string"
        },
        "fullWidthOnMobile": {
          "type": "boolean"
        },
        "align": {
          "type": "string",
          "enum": ["center", "left", "right"]
        }
      },
      "required": ["mini", "sizeType", "link", "lockDimensions", "altText", "fullWidthOnMobile", "align"]
    },
    "style": {
      "type": "object",
      "properties": {
        "max-height": {
          "type": "string",
          "pattern": "^(auto|\\d+(\\.\\d+)?(px|em|rem|%)?)$"
        },
        "max-width": {
          "type": "string",
          "pattern": "^(auto|\\d+(\\.\\d+)?(px|em|rem|%)?)$"
        },
        "src": {
          "type": "string",
          "format": "uri"
        },
        "width": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "background-color": {
          "type": "string",
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$|^rgba?\\((\\d{1,3},\\s*){2}\\d{1,3},\\s*([01]|0?\\.\\d+)\\)$"
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
        "max-height", "max-width", "src", "width", "background-color",
        "border-radius", "border-left", "border-bottom", "border-right",
        "border-top", "margin-left", "margin-bottom", "margin-right",
        "margin-top", "padding-left", "padding-bottom", "padding-right",
        "padding-top"
      ]
    }
  },
  "required": ["type", "attrs", "style"]
}
