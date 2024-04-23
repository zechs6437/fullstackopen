/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({buttonAction, buttonText}) => {
  return (
    <button onClick={buttonAction}>{buttonText}</button>
  )
}

const Anecdote = ({anecdotes, selected, votes, voteAnecdote, randAnecdote}) => {
  return (
      <div>
        <div>
          <h1>Anecdote of the day</h1>
          {anecdotes[selected]}
        </div>
        <div>
          has {votes[selected]} votes
        </div>
        <Button buttonAction={voteAnecdote} buttonText='Vote'/>
        <Button buttonAction={randAnecdote} buttonText='Next Anecdote'/>
      </div>  
  )
}

const TopAnecdote = ({anecdotes, votes, maxVotes}) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[maxVotes]}
      </div>
      <div>
        has {votes[maxVotes]} votes
      </div>
    </div>    
  )
}

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
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [maxVotes, setMaxVotes] = useState(0)

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    setMaxVotes(mostVotes())
  }

  const randAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  const mostVotes = () => {
    const maxVoteIndex = votes.reduce((maxIndex, vote, index) => {
      if (vote > votes[maxIndex]) {
        return index
      } else {
        return maxIndex
      }
    }, 0)
    return maxVoteIndex
  }

/*   const mostVotesV2 = () => {
    let maxVoteIndex = 0

    for (let index = 1; index < votes.length; index++) {
      if (votes[index] > votes[maxVoteIndex]) {
        maxVoteIndex = index
      }
    }

    return maxVoteIndex
  } */

  return (
    <>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} voteAnecdote={voteAnecdote} randAnecdote={randAnecdote}/>
      <TopAnecdote anecdotes={anecdotes} votes={votes} maxVotes={maxVotes}/>
    </>
  )
}

export default App