const baseUrl = '/api/persons'

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
  await fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
}

const update = async (id, personObject) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(personObject)
  })

  return await response.json()
}

export default { create, getAll, update, destroy }