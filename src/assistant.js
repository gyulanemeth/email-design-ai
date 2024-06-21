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

export default async (currentDoc, instruction) => {
  const textSchema = await import('./schemas/text.js')
  const imageSchema = await import('./schemas/image.js')
  const buttonSchema = await import('./schemas/button.js')
  const boxSchema = await import('./schemas/box.js')
  const multicolSchema = await import('./schemas/multicolumn.js')

  const message = `JSON schema of a text:
${JSON.stringify(textSchema, null, 2)}
JSON schema of an image:
${JSON.stringify(imageSchema, null, 2)}
JSON schema of a button:
${JSON.stringify(buttonSchema, null, 2)}
JSON schema of a box:
${JSON.stringify(boxSchema, null, 2)}
JSON schema of a multicolumn:
${JSON.stringify(multicolSchema, null, 2)}

The current document:
${JSON.stringify(currentDoc, null, 2)}
Just generate a json response, nothing else, not even a markdown wrapper around it. If the instruction does not make sense, just use the current values.
Instruction: ${instruction}`
  
  const messages = [{ role: 'user', content: message }]

  const response = await sendRequestToCompletionsApi(messages)

  return response.choices[0].message.content
}
