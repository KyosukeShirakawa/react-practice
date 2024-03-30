import { useState, useEffect} from 'react'
import personServices from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
    }


    if(persons.find(p => p.name===personObject.name)){
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name===personObject.name)
        updateNumber(person.id)
      }


      setNewName('')
      setNewNumber('')
      return
    }

  
    personServices
      .create(personObject)
      .then(returendPerson => {
        setPersons(persons.concat(returendPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const updateNumber = id => {
    const person = persons.find(person => person.id === id)
    const changedPerson = {...person, number: newNumber}

    personServices
      .update(id, changedPerson)
      .then(returendPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returendPerson))
      })

  }
  const handleDeleteButton = id => {
    const personToDelete = persons.find(person => person.id ===id)

    if(window.confirm(`Delete ${personToDelete.name}?`)){
      personServices
      .deletePerson(personToDelete)
      .then(response => {
        setPersons(persons.filter(person => person.id !== response.id ))

      }) 
      
    }
    
 

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text='filter shown with' handleSearchName={handleSearchName}/>
  


      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmitButton={handleSubmitButton}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDeleteButton={handleDeleteButton}/>
  </div>

  )
  
  
}

export default App
