const baseUrl = 'http://localhost:3001/api/notes'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return await response.json()
}

const create = async newObject => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObject)
  })

  return await response.json()
}

const update = async (id, newObject) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObject)
  })

  return await response.json();
}

export default { getAll, create, update }
