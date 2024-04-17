/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({funct, text}) => {
  return (
    <button onClick={funct}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) return 'No feedback given'

  let runningAvg = good - bad
  let totalReview = good + neutral + bad
  let average = runningAvg / totalReview
  let total = good + neutral + bad
  let positive = ((good / total) * 100)

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="All" value={good + neutral + bad}/>
          <StatisticLine text="Average" value={average}/>
          <StatisticLine text="Positive" value={`${positive} %`}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodButton = () => setGood(good + 1)
  const neutralButton = () => setNeutral(neutral + 1)
  const badButton = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button funct={goodButton} text='Good' />
        <Button funct={neutralButton} text='Neutral' />
        <Button funct={badButton} text='Bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/*<Average {...{good,neutral,bad}}/>*/} {/*ES6 object shorthand syntax*/}
    </div>
  )
}

export default App