import { useState, useEffect } from 'react'
import { IPerson } from './styles'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/personService'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState<IPerson[]>([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    personService
      .getAll()
      .then(data => setPersons(data))
      .catch(error => {
        console.log('errors', error);
      })
  }, [])

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(e.target.value);
  }

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleClickDelete = async ({ id, name }: { id: number, name: string }) => {
    const confirmMessage = `Delete ${name}?`;
    if (window.confirm(confirmMessage)) {
      try {
        await personService.delete(id);
        setPersons(persons.filter(person => person.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  }

  const addPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDuplicateName(newName)) {
      const confirmMessage = `${newName} is already added to the phonebook, replace the old number with a new one?`;
      if (window.confirm(confirmMessage)) {
        updatePerson();
      }
    } else {
      createPerson();
      setSuccessMessage('Number added successfully!')
      setTimeout(() => setSuccessMessage(null), 5000)
    }

    setNewName('');
    setNewNumber('');
  }

  const isDuplicateName = (name: string) => {
    return persons.map(person => person.name).includes(name);
  }

  const createPerson = async () => {
    try {
      const newPerson = await personService.create({ name: newName, number: newNumber });
      setPersons(persons.concat(newPerson));
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  const updatePerson = async () => {
    try {
      const person = persons.find(person => person.name === newName);
      if (person) {
        const { id } = person;
        await personService.update(id, newName, newNumber);
        const newPersons = persons.map(person => {
          return person.name !== newName ? person : { ...person, number: newNumber };
        })
        setPersons(newPersons)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const headerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div>
      <h2 style={headerStyle}>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange} />

      <h2>Add New Person</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNoteChange={handleNoteChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} searchQuery={searchQuery} handleClickDelete={handleClickDelete} />
    </div>
  )
}

export default App