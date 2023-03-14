import React from 'react';
import ReactDOM from 'react-dom/client';

const Note = ({ name, important }) => {
  const status = important ? 'make important' : 'make not important'

  return (
    <li>
      {name} {status} <button>{status}</button>
    </li>
  )
}

const Notes = ({ notes }) => {
  return notes.map(note => (
    <Note
      key={note.id}
      name={note.name}
      important={note.important}
    />)
  )
}

const App = () => {
  const notes = [
    {
      id: 1,
      name: 'Do your laundry',
      important: true
    },
    {
      id: 2,
      name: 'Finish Full Stack Open',
      important: false
    }
  ]

  return (
    <div>
      <h1>Notes</h1>
      <form>
        <label> Add note: </label>
        <input type="text" />
        <button>Add</button>
      </form>
      <Notes notes={notes} />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

