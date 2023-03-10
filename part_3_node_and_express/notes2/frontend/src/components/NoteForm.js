import React from 'react'
import { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const addNote = async (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: true
    }

    createNote(noteObject)
    // const note = await noteService.create(noteObject)
    // setNotes(notes.concat(note))
    setNewNote('')
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={event => setNewNote(event.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm