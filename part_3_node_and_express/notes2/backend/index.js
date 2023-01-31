require("dotenv").config()
const express = require("express")

const app = express()
const cors = require("cors")
const Note = require("./models/note")

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" })
  }

  if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

app.use(cors())
app.use(express.json())
app.use(express.static("build"))

app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes)
  })
})

app.post("/api/notes", (request, response, next) => {
  const { body } = request

  if (!body.content) {
    return response.status(400).json({ error: "content missing" })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then((savedNote) => {
    response.json(savedNote)
  })
    .catch((error) => next(error))
})

app.get("/api/notes/:id", async (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.put("/api/notes/:id", (request, response, next) => {
  const { content, important } = request.body

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" },
  )
    .then((updatedNote) => response.json(updatedNote))
    .catch((error) => next(error))
})

app.delete("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => response.status(204).end())
    .catch((error) => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})