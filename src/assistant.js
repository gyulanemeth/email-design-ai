const buttonSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Button Schema",
  "type": "object",
  "properties": {
    "padding": {
      "type": "object",
      "properties": {
        "top": {
          "type": "integer",
          "minimum": 0
        },
        "right": {
          "type": "integer",
          "minimum": 0
        },
        "bottom": {
          "type": "integer",
          "minimum": 0
        },
        "left": {
          "type": "integer",
          "minimum": 0
        }
      },
      "required": ["top", "right", "bottom", "left"],
      "additionalProperties": false
    }
  },
  "required": ["padding"],
  "additionalProperties": false
}


const openAiApiKey = localStorage.getItem('openAiApiKey')

async function sendRequestToCompletionsApi(messages) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({ model: 'gpt-4o', messages })
  })

  return response.json()
}

export default async function emailDesignAssistant(currentValues, instruction) {
  const message = `The following json schema describes the properties of a button:
${JSON.stringify(buttonSchema, null, 2)}
The current values are: { top: ${currentValues.top}, right: ${currentValues.right}, bottom: ${currentValues.bottom}, left: ${currentValues.left} }
Just generate a json response, nothing else, not even a markdown wrapper around it. If the instruction does not make sense, just use the current values.
Instruction: ${instruction}`
  
  const messages = [{ role: 'user', content: message }]

  const response = await sendRequestToCompletionsApi(messages)

  return response.choices[0].message.content
}
