import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const nameRegex = new RegExp(searchTerm, 'i');
  const peopleToShow = searchTerm === '' ? persons : persons.filter(person => nameRegex.test(person.name))

  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then(response => response.json())
      .then(persons => setPersons(persons))
  }, [])

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
      id: persons.length + 1,
    }))

    setNewName('')
    setNewNumber('')
  }

  const isInvalidName = (name) => persons.map(person => person.name).includes(name)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearchTermChange} />

      <h2>Add a New</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={addPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons people={peopleToShow} />
    </div>
  )
}

export default App