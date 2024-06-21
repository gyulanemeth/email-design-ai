export default {
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["text"]
    },
    "attrs": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "format": "html"
        }
      },
      "required": ["text"]
    },
    "style": {
      "type": "object",
      "properties": {
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
        },
        "background-color": {
          "type": "string",
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$|^rgba?\\((\\d{1,3},\\s*){2}\\d{1,3},\\s*([01]|0?\\.\\d+)\\)$"
        },
        "background-position": {
          "type": "string",
          "enum": ["center center", "top left", "top right", "bottom left", "bottom right", "center top", "center bottom"]
        },
        "background-repeat": {
          "type": "string",
          "enum": ["no-repeat", "repeat", "repeat-x", "repeat-y"]
        },
        "background-image": {
          "type": "string",
          "pattern": "^url\\((.*)\\)$"
        },
        "a": {
          "type": "object",
          "properties": {
            "text-decoration": {
              "type": "string",
              "enum": ["underline", "none", "overline", "line-through"]
            },
            "color": {
              "type": "string",
              "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
            }
          },
          "required": ["text-decoration", "color"]
        },
        "line-height": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "color": {
          "type": "string",
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
        },
        "font-size": {
          "type": "string",
          "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        },
        "font-family": {
          "type": "string"
        },
        "h3": {
          "type": "object",
          "properties": {
            "line-height": {
              "type": "string",
              "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            },
            "color": {
              "type": "string",
              "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
            },
            "font-size": {
              "type": "string",
              "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            },
            "font-family": {
              "type": "string"
            },
            "letter-spacing": {
              "type": "string",
              "pattern": "^normal$|^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            }
          },
          "required": ["line-height", "color", "font-size", "font-family", "letter-spacing"]
        },
        "h2": {
          "type": "object",
          "properties": {
            "line-height": {
              "type": "string",
              "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            },
            "color": {
              "type": "string",
              "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
            },
            "font-size": {
              "type": "string",
              "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            },
            "font-family": {
              "type": "string"
            },
            "letter-spacing": {
              "type": "string",
              "pattern": "^normal$|^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            }
          },
          "required": ["line-height", "color", "font-size", "font-family", "letter-spacing"]
        },
        "h1": {
          "type": "object",
          "properties": {
            "line-height": {
              "type": "string",
              "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            },
            "color": {
              "type": "string",
              "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
            },
            "font-size": {
              "type": "string",
              "pattern": "^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            },
            "font-family": {
              "type": "string"
            },
            "letter-spacing": {
              "type": "string",
              "pattern": "^normal$|^\\d+(\\.\\d+)?(px|em|rem|%)?$"
            }
          },
          "required": ["line-height", "color", "font-size", "font-family", "letter-spacing"]
        },
        "letter-spacing": {
          "type": "string",
          "pattern": "^normal$|^\\d+(\\.\\d+)?(px|em|rem|%)?$"
        }
      },
      "required": [
        "padding-left", "padding-bottom", "padding-right", "padding-top", 
        "background-color", "background-position", "background-repeat", 
        "background-image", "a", "line-height", "color", "font-size", 
        "font-family", "h3", "h2", "h1", "letter-spacing"
      ]
    }
  },
  "required": ["type", "attrs", "style"]
}
