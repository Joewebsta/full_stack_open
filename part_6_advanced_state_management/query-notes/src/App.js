import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { getNotes, createNote, updateNote } from './request'

const App = () => {
  const baseUrl = 'http://localhost:3001/notes'
  const [notes, setNotes] = React.useState([]);
  const queryClient = useQueryClient();

  const newNoteMutation = useMutation(async newNote => {
    const response = await axios.post(baseUrl, newNote);
    return response.data;
  }, {
    onSuccess: (newNote) => {
      // const notes = queryClient.getQueryData('notes');
      // queryClient.setQueryData('notes', notes.concat(newNote))
      queryClient.invalidateQueries('notes')
    }
  })

  // const updateNoteMutation = useMutation(updateNote, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('notes')
  //   }
  // })

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    const response = await axios.post('http://localhost:3001/notes', { content, important: false })
    setNotes(notes.concat(response.data))


    // newNoteMutation.mutate({ content, important: true })
    console.log(content)
  }

  const toggleImportance = (note) => {
    // updateNoteMutation.mutate({ ...note, important: !note.important });
  }

  useEffect(() => {

    async function myFunc() {
      const axio = await axios.get('http://localhost:3001/notes')
      const data = axio.data;

      setNotes(data)
    }
    myFunc()
  }, [])

  // const result = useQuery('notes', getNotes, {
  //   refetchOnWindowFocus: false
  // });

  // if (result.isLoading) {
  //   return <div>loading data...</div>
  // }

  // const notes = result.data

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map(note =>
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? 'important' : ''}</strong>
        </li>
      )}
    </div>
  )
}

export default App