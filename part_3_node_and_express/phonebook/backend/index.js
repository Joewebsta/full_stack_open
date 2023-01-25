const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

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

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) return response400(response, "Name missing")
  if (!body.number) return response400(response, "Number missing")
  if (isDuplicateName(body)) return response400(response, "Name must be unique")

  const person = {
    id: generateID(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)

  response.json(person)
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

const generateID = () => {
  return Math.round(Math.random() * 999_999_999 + 1);
}

const isDuplicateName = ({ name }) => {
  const namesArr = persons.map(person => person.name)
  return namesArr.includes(name)
}

const response400 = (response, message) => {
  response.status(400).json({error: message})
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})