import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

const Home = () => <div><h2>TKTL notes app</h2></div>
const Notes = () => <div><h2>Notes</h2></div>
const Users = () => <div><h2>Users</h2></div>

const App = () => {
  const padding = { padding: 5 }

  return (
    <Router>
      <div>
        <Link to="/" style={padding} >home</Link>
        <Link to="/notes" style={padding}>notes</Link>
        <Link to="/users" style={padding} >users</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
