const express = require("express")
const app = express()

app.use(express.json())

let persons = [
  { 
    id: 1,
    name: "Arto Hellas", 
    number: "040-123456"
  },
  { 
    id: 2,
    name: "Ada Lovelace", 
    number: "39-44-5323523"
  },
  { 
    id: 3,
    name: "Dan Abramov", 
    number: "12-43-234345"
  },
  { 
    id: 4,
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).json({
      error: `Person with id ${id} cannot be found.`
    })
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const idArr = persons.map(person => person.id)
  
  if (idArr.includes(id)) {
    persons = persons.filter(p => p.id !== id)
    response.status(200).json({ message: "Person deleted successfully." })
  } else {
    response.status(404).json({ error: "Person could not be deleted."})
  }
})

app.get('/info', (request, response) => {
  const info = `<p>Phonebook has info for ${persons.length} people<p><p>${new Date()}</p>`
  response.send(info)
})


const PORT = 3001
app.listen(PORT)