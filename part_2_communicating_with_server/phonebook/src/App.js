import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '5555555555' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const nameRegex = new RegExp(searchTerm, 'i');
  const peopleToShow = searchTerm === '' ? persons : persons.filter(person => nameRegex.test(person.name))

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)
  const handleSearchTermChange = (e) => setSearchTerm(e.target.value)

  const addPerson = (e) => {
    e.preventDefault()

    if (isInvalidName(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat({
      name: newName,
      number: newNumber,
    }))

    setNewName('')
    setNewNumber('')
  }

  const displayPersons = () => {
    if (peopleToShow.length === 0) return <p>There are no people to show.</p>

    return peopleToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)
  }

  const isInvalidName = (name) => {
    const names = persons.map(person => person.name)
    return names.includes(name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with
        <input type="text" onChange={handleSearchTermChange} />
      </form>
      <h2>Add a New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayPersons()}
    </div>
  )
}

export default App