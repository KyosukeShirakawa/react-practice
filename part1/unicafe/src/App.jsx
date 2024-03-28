import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  
  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)

  }

  return (
    <>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleGoodClick}/>
      <Button text='neutral' handleClick={handleNeutralClick}/>
      <Button text='bad' handleClick={handleBadClick}/>
      <h1>Statistics</h1>
      <Statistics text='statistics' good={good} neutral={neutral} bad={bad} all={all}/>      

    </>
  )
}

export default App
