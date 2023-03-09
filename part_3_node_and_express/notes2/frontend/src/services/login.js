const baseURL = '/api/login'

const login = async credentials => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })

  return await response.json()
}

export default { login }