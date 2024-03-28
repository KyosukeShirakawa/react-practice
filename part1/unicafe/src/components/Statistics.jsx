import Statistic from "./Statistic";

const Statistics = ({good, neutral, bad, all}) => {
  const average = (good-bad) / all

  if(!all){
    return (
      <p>No feedback given</p>
    )
  }

  return (
   <table>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>     
      <Statistic text='all' value={all}/>     
      <Statistic text='average' value={average}/>
    </table>
    
  )

}

export default Statistics