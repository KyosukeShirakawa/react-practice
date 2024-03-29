import { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


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
