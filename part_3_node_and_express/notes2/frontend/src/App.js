import React from 'react'
import { useState, useEffect } from 'react'
import Note from './components/Note'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'
import noteService from './services/notes'
import loginService from './services/login'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)

  useEffect(() => {
    noteService
      .getAll()
      .then(notes => setNotes(notes))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = async (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }


    const note = await noteService.create(noteObject)
    setNotes(notes.concat(note))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = async id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    const responseNote = await noteService.update(id, changedNote)
    setNotes(notes.map(n => n.id !== id ? n : responseNote))
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      // setErrorMessage('Wrong credentials')
      // setTimeout(() => {
      //   setErrorMessage(null)
      // }, 5000)
    }
    console.log('logging in with', username, password);
  }



  // const noteForm = () => (
  //   <form onSubmit={addNote}>
  //     <input
  //       value={newNote}
  //       onChange={handleNoteChange}
  //     />
  //     <button type="submit">save</button>
  //   </form>
  // )

  // const loginForm = () => {
  //   const hideWhenVisible = { display: loginVisible ? 'none' : '' }
  //   const showWhenVisible = { display: loginVisible ? '' : 'none' }

  //   return (
  //     <div>
  //       <div style={hideWhenVisible}>
  //         <button onClick={() => setLoginVisible(true)}>log in</button>
  //       </div>
  //       <div style={showWhenVisible}>
  //         <LoginForm
  //           username={username}
  //           password={password}
  //           handleUsernameChange={({ target }) => setUsername(target.value)}
  //           handlePasswordChange={({ target }) => setPassword(target.value)}
  //           handleSubmit={handleLogin}
  //         />
  //         <button onClick={() => setLoginVisible(false)}>cancel</button>
  //       </div>
  //     </div>
  //   )
  // }


  return (
    <div>

      <h1>Notes</h1>

      {/* <Notification message={errorMessage} /> */}

      {!user &&
        <Togglable buttonLabel="log in">
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      }
      {user &&
        <div>
          <p>{user.name} logged in</p>
          <Togglable buttonLabel="new note">
            <NoteForm createNote={addNote} />
          </Togglable>
        </div>
      }

      <h2>Notes</h2>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
    </div>
  )
}

export default App 