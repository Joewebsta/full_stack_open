import { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'


const Note = ({ content, important, handleClick }) => {
  const status = important ? 'important' : ''

  return (
    <li onClick={handleClick}>
      {content} <strong>{status}</strong>
    </li>
  )
}

const Notes = ({ notes, handleClick }) => {
  return (
    <ul>
      {notes.map(note => (
        <Note
          key={note.id}
          content={note.content}
          important={note.important}
          handleClick={() => handleClick(note.id)}
        />)
      )}
    </ul>
  )
}

const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state)

  const addNote = (e) => {
    e.preventDefault()

    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(createNote(content))
  }

  const toggleImportance = id => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input name="note" type="text" />
        <button type="submit">Add</button>
      </form>
      <Notes notes={notes} handleClick={toggleImportance} />
    </div>
  )
}

export default App