import { useState, useEffect } from 'react'
import { IPerson } from './styles'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState<IPerson[]>([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const addPerson = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDuplicateName(newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      try {
        personService
          .create({ name: newName, number: newNumber })
          .then(data => setPersons(persons.concat(data)));
      } catch (error) {
        console.log('Error: ', error);
      }
    }

    setNewName('');
    setNewNumber('');
  }

  const isDuplicateName = (name: string) => {
    return persons.map(person => person.name).includes(name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange} />

      <h2>Add New Person</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNoteChange={handleNoteChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} searchQuery={searchQuery} handleClickDelete={handleClickDelete} />
    </div>
  )
}

export default App