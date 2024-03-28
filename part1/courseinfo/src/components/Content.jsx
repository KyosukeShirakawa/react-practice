import Part from "./Part"

const Content = ({course}) => {
  return (
    <ul>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </ul>


  
  )
}

export default Content
