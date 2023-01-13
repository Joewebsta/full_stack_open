import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

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
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  )
}

export default App