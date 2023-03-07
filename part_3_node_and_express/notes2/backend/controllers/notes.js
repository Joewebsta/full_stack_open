const notesRouter = require('express').Router()
const Note = require("../models/note")

notesRouter.get("/", async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})

notesRouter.get("/:id", async (request, response, next) => {
  const note = await Note.findById(request.params.id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

notesRouter.post("/", async (request, response, next) => {
  const { body } = request

  if (!body.content) {
    return response.status(400).json({ error: "content missing" })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  const savedNote = await note.save()
  response.status(201).json(savedNote)
})

notesRouter.delete("/:id", async (request, response, next) => {
  await Note.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

notesRouter.put("/:id", async (request, response, next) => {
  const { content, important } = request.body

  const updatedNote = await Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" },
  )

  response.json(updatedNote)
})

module.exports = notesRouter