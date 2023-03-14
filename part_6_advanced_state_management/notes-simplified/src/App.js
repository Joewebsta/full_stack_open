import Notes from "./components/Notes"
import NewNote from "./components/NewNote"

const App = () => {
  return (
    <div>
      <h1>Notes</h1>
      <NewNote />
      <Notes />
    </div>
  )
}

export default App