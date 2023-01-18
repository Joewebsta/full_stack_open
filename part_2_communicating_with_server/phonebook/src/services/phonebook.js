
const getAll = async () => {
  const response = await fetch('http://localhost:3001/persons')
  return await response.json();
}

const update = async (person) => {
  const response = await fetch('http://localhost:3001/persons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person)
    })

  return await response.json();
}

export default { getAll, update }