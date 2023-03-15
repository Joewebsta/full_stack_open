const baseURL = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await fetch(baseURL)
  return await response.json()
}

const createNew = async (content) => {
  const object = { content, important: false }
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object)
  })

  return await response.json()
}

export default { getAll, createNew }