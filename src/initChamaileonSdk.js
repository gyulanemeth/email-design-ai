async function fetchAccessToken({ apiKey }) {
  const accessTokenRequest = await fetch('https://sdk-api.chamaileon.io/api/v2/tokens/generate', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  })

  if (!accessTokenRequest.ok) {
    throw new Error("Auth error")
  }

  const accessTokenResponse = await accessTokenRequest.json()
  const accessToken = accessTokenResponse.result

  return accessToken
}

async function getAccessToken({ apiKey }) {
  return fetchAccessToken({ apiKey })
}

export default async function initChamaileonSdk() {
  try {
    const apiKey = localStorage.getItem('chApiKey')
    const accessToken = await getAccessToken({ apiKey })

    const whitelabelConfig = {
      locale: 'en',
      colors: {
        'primary': '#aaaaff',
        'secondary': '#009f4a',
        'red': '#ff5546',
        'darkBlue': '#2d3291',
        'darkGreen': '#00af6e',
        'lightGreen': '#50d791',
        'weirdGreen': '#50d791',
        'pink': '#ff91a0',
        'yellow': '#ffd23c',
      }
    }

    const chamaileonPlugins = await window.chamaileonSdk({
      ...whitelabelConfig,
      accessToken,
      getAccessToken: () => getAccessToken({ apiKey })
    })

    return chamaileonPlugins
  } catch(e) {
    alert('Authentication problem. Please check out your API key settings.')
  }
}
