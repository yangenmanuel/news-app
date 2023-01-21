async function getApiKey () {
  const res = await fetch('api/data')
  const parsed = await res.json()

  return parsed.apiKey
}

export const apiKey = getApiKey()

