import { useState } from 'react'
import Button from './components/Button'


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'I love her'
  ]

  const [points, setPoints] = useState( new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)  
  const [mostVoted, setMostVoted] = useState(0)

  const generateNextAnecdote = () => {
    let nextAnec = Math.floor(Math.random()*anecdotes.length)
    setSelected(nextAnec)

  }

  const handleVote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    updateMostVoted(copy)
  }

  const updateMostVoted = (copy) => {
    if(copy[selected]>copy[mostVoted]){
      setMostVoted(selected)
    }
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleEvent={handleVote} text='vote'/>
      <Button handleEvent={generateNextAnecdote} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {points[mostVoted]} votes</p>

    </div>
  )
  
  
}

export default App
