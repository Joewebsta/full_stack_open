import React from "react"

const Persons = ({ people, handleDelete }) => {
  if (people.length === 0) return <p>There are no people to show.</p>

  return people.map(person => (
    <Person 
      key={person.id} 
      person={person}
      handleDelete={handleDelete}
    />
  ))
}

const Person = ({ person, handleDelete }) => (
  <div key={person.id}>
    <span>{person.name} </span>
    <span>{person.number} </span>
  <button onClick = {() => handleDelete(person.id)}>delete</button></div>
)

export default Persons