import { useState, useEffect} from 'react'
import personServices from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [operationMessage, setOperationMessage] = useState(null)
  const [isSuccess, setIsSuccess] = useState(true)

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
        setIsSuccess(true)
        setOperationMessage(
          `Person '${returendPerson.name}' was successfully added to the phonebook`
        )
        setTimeout(() => {
          setOperationMessage(null)
        }, 5000)
      })
  }

  const updateNumber = id => {
    const person = persons.find(person => person.id === id)
    const changedPerson = {...person, number: newNumber}

    personServices
      .update(id, changedPerson)
      .then(returendPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returendPerson))

        setIsSuccess(true)
        setOperationMessage(
          `${returendPerson.name}'s phone number was successfully updated`
        )
        setTimeout(() => {
          setOperationMessage(null)
        }, 5000)
      })
      .catch(error => {
        setIsSuccess(false)
        setOperationMessage(
          `Person '${person.name}' was already removed from server`
        )
        setTimeout(() => {
          setOperationMessage(null)
        }, 5000)
      })

  }
  const handleDeleteButton = id => {
    const personToDelete = persons.find(person => person.id ===id)

    if(window.confirm(`Delete ${personToDelete.name}?`)){
      personServices
      .deletePerson(personToDelete)
      .then(returendPerson => {
        setPersons(persons.filter(person => person.id !== returendPerson.id ))

      })
      .catch(error => {
        setIsSuccess(false)
        setOperationMessage(
          `Person '${personToDelete.name} was already removed from server`
        )
        setTimeout(() => {
          setOperationMessage(null)
        }, 5000)
      })
      
    }
    
 

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={operationMessage} isSuccess={isSuccess} />
      <Filter text='filter shown with' handleSearchName={handleSearchName}/>


      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmitButton={handleSubmitButton}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDeleteButton={handleDeleteButton}/>
  </div>

  )
  
  
}

export default App
