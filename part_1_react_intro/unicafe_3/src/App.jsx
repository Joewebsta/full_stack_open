import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header text={"give feedback"} />
      <Header text={"statistics"} />
      <Button text={"good"} />
      <Button text={"neutral"} />
      <Button text={"bad"} />
    </>
  );
};

export default App;
