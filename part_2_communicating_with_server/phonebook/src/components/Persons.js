import React from "react"

const Persons = ({ people }) => {
  if (people.length === 0) return <p>There are no people to show.</p>

  return people.map(person => <Person key={person.id} person={person} />)
}

const Person = ({ person }) => <p key={person.id}>{person.name} {person.number}</p>

export default Persons