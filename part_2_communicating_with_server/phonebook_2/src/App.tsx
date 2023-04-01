import { useState, useEffect } from 'react'
import axios from 'axios'
import { IPerson } from './styles'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState<IPerson[]>([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.log('error', error);
        alert('something went wrong');
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

  const addPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDuplicateName(newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }));
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
      <Persons persons={persons} searchQuery={searchQuery} />
    </div>
  )
}

export default App