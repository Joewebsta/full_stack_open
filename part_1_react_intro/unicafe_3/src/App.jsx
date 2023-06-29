import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButtonClick = () => {
    setGood((goodValue) => goodValue + 1);
  };

  const handleNeutralButtonClick = () => {
    setNeutral((neutralValue) => neutralValue + 1);
  };

  const handleBadButtonClick = () => {
    setBad((badValue) => badValue + 1);
  };

  return (
    <main className="h-screen bg-gray-200 p-8">
      <section className="container mx-auto max-w-sm bg-white p-5">
        <Header text={"Give Feedback"} />
        <section className="mt-2 flex gap-2">
          <Button text={"good"} handleClick={handleGoodButtonClick} />
          <Button text={"neutral"} handleClick={handleNeutralButtonClick} />
          <Button text={"bad"} handleClick={handleBadButtonClick} />
        </section>
        <section className="mt-5">
          <Header text={"Statistics"} />
          <Statistics good={good} neutral={neutral} bad={bad} />
        </section>
      </section>
    </main>
  );
};

export default App;
