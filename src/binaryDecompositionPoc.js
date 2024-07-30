const openAiApiKey = 'your-openai-api-key'

async function sendRequestToCompletionsApi(messages) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openAiApiKey}`
    },
    body: JSON.stringify({ model: 'gpt-4', temperature: 0, max_tokens: 3, top_p: 1, messages })
  })

  return response.json()
}

async function decompose(decompositionTask, userInput) {
  const prompt = `${decompositionTask} Answer with yes or no. User input: ${userInput}`

  const messages = [{ role: 'user', content: prompt }]

  const response = await sendRequestToCompletionsApi(messages)

  const result = response.choices[0].message.content

  console.log('A:', decompositionTask, userInput, result)

  return result.toLowerCase().includes('yes')
}


async function main() {
  const userInput = process.argv[2]

  const [ aboutDesign, aboutContent ] = await Promise.all([
    decompose('Is the user input strictly design-related?', userInput),
    decompose('Is the user input content-related?', userInput)
  ])

  if (aboutDesign) {
    console.log('DESIGN')
    const [ aboutColors, aboutFonts ] = await Promise.all([
      decompose('Is the user input about changing a color?', userInput),
      decompose('Is the user input about changing a font family?', userInput)
    ])

    if (!aboutColors && !aboutFonts) {
      const [ aboutButtons, aboutTexts ] = await Promise.all([
        decompose('Is the user input about changing a button?', userInput),
        decompose('Is the user input about changing a text element?', userInput)
      ])

      if (!aboutButtons && !aboutTexts) {
        const [ aboutHeader, aboutFooter, aboutHeroUnit ] = await Promise.all([
          decompose('Is the user input about the header?', userInput),
          decompose('Is the user input about the footer?', userInput),
          decompose('Is the user input about the hero unit?', userInput),
        ])

        if (!aboutHeader && !aboutFooter && !aboutHeroUnit) {
          console.log('User input is about the general design - PLEASE SPECIFY YOUR REQUEST')
        } else {
          if (aboutHeader) {
            console.log('DESIGN - HEADER')
          }
  
          if (aboutFooter) {
            console.log('DESIGN - FOOTER')
          }
  
          if (aboutHeroUnit) {
            console.log('DESIGN - HERO UNIT')
          }
        }
      } else {
        if (aboutButtons) {
          console.log('DESIGN - BUTTONS')
        }
  
        if (aboutTexts) {
          console.log('DESIGN - TEXTS')
        }
      }
    } else {
      if (aboutColors) {
        console.log('DESIGN - COLORS')
      }
  
      if (aboutFonts) {
        console.log('DESIGN - FONTS')
      }
    }

  }

  if (aboutContent) {
    console.log('CONTENT')
    const [ aboutHeader, aboutFooter, aboutHeroUnit ] = await Promise.all([
      decompose('Is the user input related to the header section?', userInput),
      decompose('Is the user input related to the footer section?', userInput),
      decompose('Is the user input related to the main section?', userInput),
    ])

    if (!aboutHeader && !aboutFooter && !aboutHeroUnit) {
      console.log('User input is about the general content - PLEASE SPECIFY YOUR REQUEST')
    } else {
      if (aboutHeader) {
        console.log('CONTENT - HEADER')
      }

      if (aboutFooter) {
        console.log('CONTENT - FOOTER')
      }

      if (aboutHeroUnit) {
        console.log('CONTENT - HERO UNIT')
      }
    }
  }
}

main()



