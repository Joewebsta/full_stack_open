require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const Person = require('./models/phonebook')

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) return response400(response, "Name missing")
  if (!body.number) return response400(response, "Number missing")
  if (isDuplicateName(body)) return response400(response, "Name must be unique")

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      response.json(person)
    })
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

const isDuplicateName = ({ name }) => {
  return Person.find({ "name": name }).length > 0
}

const response400 = (response, message) => {
  response.status(400).json({error: message})
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})