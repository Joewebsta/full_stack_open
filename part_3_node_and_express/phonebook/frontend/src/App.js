import React from 'react'
import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const nameRegex = new RegExp(searchTerm, 'i');
  const peopleToShow = searchTerm === '' ? persons : persons.filter(person => nameRegex.test(person.name))

  useEffect(() => {
    phonebookService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)
  const handleSearchTermChange = (e) => setSearchTerm(e.target.value)

  const addPerson = async e => {
    e.preventDefault()

    if (isInvalidName(newName)) {
      const message = `${newName} is already added to phonebook. Replace the old number with a new one?`
      if (window.confirm(message)) {
        updateNumber()
      } else {
        setNewName('')
        setNewNumber('')
      }

      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    const responsePerson = await phonebookService.create(personObject)
    setPersons(persons.concat(responsePerson))
    setSuccessMessage(`Added ${newName}`)
    setNewName('')
    setNewNumber('')

    setTimeout(() => setSuccessMessage(null), 3000)
  }

  const updateNumber = async () => {
    const person = findPerson('name', newName)
    const changedPerson = { ...person, number: newNumber }
    const responsePerson = await phonebookService.update(person.id, changedPerson)

    setPersons(persons.map(p => (p.id !== person.id) ? p : responsePerson))
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = async id => {
    const { name } = findPerson('id', id)

    if (window.confirm(`Delete ${name}?`)) {
      await phonebookService.destroy(id);
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const isInvalidName = (name) => persons.map(person => person.name).includes(name)
  const findPerson = (attribute, value) => persons.find(person => person[attribute] === value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
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
      <Persons people={peopleToShow} handleDelete={deletePerson} />
    </div>
  )
}

export default App