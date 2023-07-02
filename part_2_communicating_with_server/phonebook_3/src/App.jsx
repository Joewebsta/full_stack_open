import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewNumberForm from "./components/NewNumberForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <main className="mx-auto max-w-md p-5">
      <Header />
      <NewNumberForm />
      <Numbers />
    </main>
  );
};

export default App;
