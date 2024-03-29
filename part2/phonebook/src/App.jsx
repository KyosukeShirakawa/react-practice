import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')


  const personsToShow = persons.filter(person => {
    return person.name.toLowerCase().includes(searchName.toLowerCase())
  })


  const handleNewName = (e) => {
    setNewName(e.target.value)
  }
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }
  const handleSearchName = (e) => {
    setSearchName(e.target.value)
  }
  

  const handleSubmitButton = (e) => {
    e.preventDefault()
    const personObject = {
      name:newName,
      number:newNumber,
      id: persons.length + 1
    }

    if(persons.find(p => p.name===personObject.name)){
      alert(`${personObject.name} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text='filter shown with' handleSearchName={handleSearchName}/>
  


      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmitButton={handleSubmitButton}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
  </div>

  )
  
  
}

export default App
