const Persons = ({personsToShow,handleDeleteButton}) => {

  return (
    <>
      {personsToShow.map(person => {
        return <li key={person.id}>{person.name} {person.number} <button onClick={() => handleDeleteButton(person.id)}>delete</button></li>
      })}
    </>
  )

}

export default Persons