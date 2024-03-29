const Total = ({course}) => {
  const total = 
    course.parts.reduce((sum, p) => sum + p.exercises, 0)


  return (
    <h3>
      Number of exercises {total}
    </h3>
  )
}   
     
export default Total
