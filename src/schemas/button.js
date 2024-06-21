export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
      "type": {
        "type": "string",
        "enum": ["button"]
      },
      "attrs": {
          "type": "object",
          "properties": {
              "sizeType": {
                  "type": "string",
                  "enum": ["FIT_TO_TEXT"]
              },
              "href": {
                  "type": "string",
                  "format": "uri"
              },
              "text": {
                  "type": "string",
                  "pattern": "<p>.*</p>\\n"
              },
              "fullWidthOnMobile": {
                  "type": "boolean"
              },
              "align": {
                  "type": "string",
                  "enum": ["left", "center", "right"]
              }
          },
          "required": ["sizeType", "href", "text", "fullWidthOnMobile", "align"]
      },
      "style": {
          "type": "object",
          "properties": {
              "line-height": {
                  "type": "string",
                  "pattern": "^[0-9]+(px|em|%)$"
              },
              "color": {
                  "type": "string",
                  "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              },
              "font-size": {
                  "type": "string",
                  "pattern": "^[0-9]+(px|em|rem|%)$"
              },
              "font-family": {
                  "type": "string"
              },
              "background-color": {
                  "type": "string",
                  "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              },
              "background-position": {
                  "type": "string",
                  "enum": ["center center", "top left", "top center", "top right", "center left", "center right", "bottom left", "bottom center", "bottom right"]
              },
              "background-repeat": {
                  "type": "string",
                  "enum": ["no-repeat", "repeat", "repeat-x", "repeat-y"]
              },
              "background-image": {
                  "type": "string",
                  "format": "uri"
              },
              "border-radius": {
                  "type": "string",
                  "pattern": "^[0-9]+(px|%)$"
              },
              "border-left": {
                  "type": "string",
                  "pattern": "^[0-9]+px (solid|dashed|dotted) #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              },
              "border-bottom": {
                  "type": "string",
                  "pattern": "^[0-9]+px (solid|dashed|dotted) #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              },
              "border-right": {
                  "type": "string",
                  "pattern": "^[0-9]+px (solid|dashed|dotted) #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              },
              "border-top": {
                  "type": "string",
                  "pattern": "^[0-9]+px (solid|dashed|dotted) #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              },
              "margin-left": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "margin-bottom": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "margin-right": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "margin-top": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "padding-left": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "padding-bottom": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "padding-right": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "padding-top": {
                  "type": "string",
                  "pattern": "^[0-9]+px$"
              },
              "letter-spacing": {
                  "type": "string",
                  "pattern": "^(normal|[0-9]+px)$"
              }
          },
          "required": [
              "line-height", "color", "font-size", "font-family", "background-color",
              "background-position", "background-repeat", "background-image",
              "border-radius", "border-left", "border-bottom", "border-right",
              "border-top", "margin-left", "margin-bottom", "margin-right",
              "margin-top", "padding-left", "padding-bottom", "padding-right",
              "padding-top", "letter-spacing"
          ]
      }
  },
  "required": ["attrs", "style"]
}
