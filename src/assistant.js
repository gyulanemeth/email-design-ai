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

export default async function generateButton(currentButton, instruction) {
  const buttonSchema = await import('./buttonSchema.js')
  const message = `The following json schema describes the properties of a button:
${JSON.stringify(buttonSchema, null, 2)}
The current values are:
${JSON.stringify(currentButton, null, 2)}
Just generate a json response, nothing else, not even a markdown wrapper around it. If the instruction does not make sense, just use the current values.
Instruction: ${instruction}`
  
  const messages = [{ role: 'user', content: message }]

  const response = await sendRequestToCompletionsApi(messages)

  return response.choices[0].message.content
}
