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
    <>
      <Header text={"give feedback"} />
      <Button text={"good"} handleClick={handleGoodButtonClick} />
      <Button text={"neutral"} handleClick={handleNeutralButtonClick} />
      <Button text={"bad"} handleClick={handleBadButtonClick} />
      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
