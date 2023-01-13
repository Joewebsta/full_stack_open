import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = ({text, value, symbol}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}{symbol}</td>
  </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let all = good + bad + neutral
  let average = all / 3;
  let positive = good / all * 100;

  if (all === 0) return <div>No feedback given</div>

  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <StatisticLine text={'all'} value={all}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={positive} symbol={'%'}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <>
      <Header text={'give feedback'}/>
      <Button text={'good'} handleClick={handleClickGood}/>
      <Button text={'neutral'} handleClick={handleClickNeutral}/>
      <Button text={'bad'} handleClick={handleClickBad}/>

      <Header text={'statistics'}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App