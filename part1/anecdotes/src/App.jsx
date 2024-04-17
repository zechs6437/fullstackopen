import { useState } from 'react'

// LAST STEP COMPLETED WAS 1.13

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))

  const voteAnecdote = () => {
    const anecdote = selected
    const newVotes = [...votes]
    newVotes[anecdote] += 1
    setVotes(newVotes)
    console.log(votes)
  }

  const randAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={randAnecdote}>Next Anecdote</button>
    </div>
  )
}

export default App