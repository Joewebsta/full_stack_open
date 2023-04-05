import { IPerson } from "../styles"

const Person = ({ person, handleClickDelete }: { person: IPerson, handleClickDelete: any }) => {
  const { name, number } = person;

  return (
    <div>
      <p>
        {name}{' '}{number}{' '}
        <button onClick={() => { handleClickDelete(person) }}>delete</button>
      </p>
    </div>
  )
}

const Persons = ({ persons, searchQuery, handleClickDelete }: { persons: IPerson[], searchQuery: string, handleClickDelete: any }) => {

  const searchResults = () => {
    return persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  const personList = () => {
    return persons.map(person => <Person key={person.id} person={person} handleClickDelete={handleClickDelete} />);
  }

  const searchResultList = () => {
    return searchResults().map(person => <Person key={person.name} person={person} handleClickDelete={handleClickDelete} />);
  }

  return (
    <div>
      {searchQuery ? searchResultList() : personList()}
    </div>
  )
}

export default Persons