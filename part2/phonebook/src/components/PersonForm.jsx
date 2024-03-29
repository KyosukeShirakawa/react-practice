const PersonForm = ({newName, newNumber, handleNewName, handleNewNumber, handleSubmitButton}) => {


  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNewName}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber}/>
      </div>
      <div>
        <button type="submit" onClick={handleSubmitButton}>add</button>
      </div>

    </form>
  )
}

export default PersonForm


