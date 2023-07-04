import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import NewNumberForm from "./components/NewNumberForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const handleAddPerson = (name) => {
    setPersons([...persons, { name }]);
  };

  return (
    <main className="mx-auto max-w-md p-5">
      <Header />
      <NewNumberForm handleAddPerson={handleAddPerson} persons={persons} />
      <Numbers persons={persons} />
    </main>
  );
};

export default App;
