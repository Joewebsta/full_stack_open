import React from "react";

const Numbers = ({ persons }) => {
  return (
    <section className="bg-lime-300 p-5">
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <li key={person.name}>{person.name}</li>;
      })}
    </section>
  );
};

export default Numbers;
