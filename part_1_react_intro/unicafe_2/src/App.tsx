import { useState } from "react";

const Header1 = ({ text }: { text: string }) => <h1>{text}</h1>
const Header2 = ({ text }: { text: string }) => <h2>{text}</h2>

const Button = ({ text, handleClick }: { text: string, handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Stats = ({ data }: { data: number[] }) => {
  const [good, neutral, bad] = data;
  const all = good + neutral + bad;

  if (all === 0) return (<p>No feedback given</p>);

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good - bad) / all}</p>
      <p>positive {good / all * 100}%</p>
    </div >
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const data = [good, neutral, bad];

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header1 text={"give feedback"} />
      <Button text={"good"} handleClick={handleGoodClick} />
      <Button text={"neutral"} handleClick={handleNeutralClick} />
      <Button text={"bad"} handleClick={handleBadClick} />
      <Header2 text={"statistics"} />
      <Stats data={data} />
    </div>
  );
}

export default App;