const openAiApiKey = 'your openai api key'

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

async function contentOrDesign(userInput) {
  const prompt = `Determine if the following user input is about content, design, both or none. Answer with a single word.

    User input:
    ${userInput}`

  const messages = [{ role: 'user', content: prompt }]

  const response = await sendRequestToCompletionsApi(messages)

  return response.choices[0].message.content
}

function determineDesignTopics() {
  
}

async function determineContentTopics(userInput) {
  const prompt = `Determine if the user input is about the header, the hero unit, the procuts or none. Answer with a single word.
  
    User input:
    ${userInput}`

  const messages = [{ role: 'user', content: prompt }]

  const response = await sendRequestToCompletionsApi(messages)

  return response.choices[0].message.content
}

async function main() {
  const userInput = process.argv[2]

  console.log('User input:', userInput)

  console.log('Is the user input about design, content, both or none?')

  const mainTopic = await contentOrDesign(userInput)

  console.log(`It's about ${mainTopic.toLowerCase()}.`)

  if (mainTopic === 'None') {
    console.log('The user input is not about design nor content, so there is nothing to do.')
    process.exit(0)
  }

  if (mainTopic === 'Both') {
    console.log('The user input is about design AND content, so we need to deal with both.')
  } else if (mainTopic === 'Design') {
    console.log('The user input is about design, so we need to deal with design.')
  } else {
    console.log('The user input is about content, so we need to deal with content.')
    const subTopic = await determineContentTopics(userInput)
    console.log(`It's about ${subTopic.toLowerCase()}.`)
  }
}

main()
