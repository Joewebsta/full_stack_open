const baseURL = 'http://localhost:3001/api/events';

const getAll = async () => {
  const response = await fetch(`${baseURL}`);
  return await response.json();
}

const create = async (newEvent) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newEvent),
  });

  return await response.json();
}

const update = async (id, event) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/JSON' },
    body: JSON.stringify(event),
  })

  return await response.json();
}

export default { getAll, create, update }