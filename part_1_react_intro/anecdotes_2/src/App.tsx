import { useState } from 'react'

const App = () => {
  const anecdotes: string[] = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  interface Points {
    [key: number]: number;
  }

  const generatePoints = () => {
    return anecdotes.reduce((pointsObj: Points, _anecdote, index) => {
      pointsObj[index] = 0;
      return pointsObj;
    }, {})
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(generatePoints());
  const currentAnecdote = anecdotes[selected];

  const randomNumber = () => Math.floor(Math.random() * anecdotes.length);

  const indexWithMostVotes = () => {
    const votesArr: number[] = [...Object.values(points)];
    const maxVotes = Math.max(...votesArr);
    return votesArr.indexOf(maxVotes);
  }

  const handleNextAnecdote = () => setSelected(randomNumber());
  const handleIncreaseVoteCount = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 })
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{currentAnecdote}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleIncreaseVoteCount}>vote</button>
      <button onClick={handleNextAnecdote}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[indexWithMostVotes()]}</p>

    </div>
  )
}

export default App