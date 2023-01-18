const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return await response.json();
}

const create = async person => {
  const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person)
    })

  return await response.json();
}

const destroy = async id => {
  const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
  return response.json()
}

export default { getAll, create, destroy }