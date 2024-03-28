import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"



function App() {
  const course = 'Half Stack application development'
  const parts = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component'
  }
  const exercises = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }


 

  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </>

  )
}

export default App
