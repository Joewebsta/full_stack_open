import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]
    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id
      const noteToChange = state.find(note => note.id === id)
      const changedNote = { ...noteToChange, important: !noteToChange.important }
      return state.map(note => note.id !== id ? note : changedNote)
    }
    default:
      return state
  }
}

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'the app stat is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}


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
  const addNote = (e) => {
    e.preventDefault()

    const content = e.target.note.value
    e.target.note.value = ''
    store.dispatch(createNote(content))
  }

  const toggleImportance = id => {
    store.dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input name="note" type="text" />
        <button type="submit">Add</button>
      </form>
      <Notes notes={store.getState()} handleClick={toggleImportance} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)