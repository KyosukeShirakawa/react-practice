const Persons = ({personsToShow}) => {

  return (
    <>
      {personsToShow.map(person => {
        return <li key={person.id}>{person.name} {person.number}</li>
      })}
    </>
  )

}

export default Persons