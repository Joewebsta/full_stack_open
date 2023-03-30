import { IPerson } from "../styles"

const Persons = ({ persons, searchQuery }: { persons: IPerson[], searchQuery: string }) => {

  const searchResults = () => {
    return persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  const personList = () => {
    return persons.map(person => <Person key={person.name} person={person} />);
  }

  const searchResultList = () => {
    return searchResults().map(person => <Person key={person.name} person={person} />);
  }

  return (
    <div>
      {searchQuery ? searchResultList() : personList()}
    </div>
  )
}

const Person = ({ person }: { person: IPerson }) => {
  const { name, number } = person;
  return <p>{name}{' '}{number} </p>
}

export default Persons