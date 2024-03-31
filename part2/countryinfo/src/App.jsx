import { useState, useEffect} from 'react'
import countryService from './services/countryService';
import Display from './components/Display'

function App() {
  const [newCountry, setNewCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then( initialCountries => {
        setCountries(initialCountries)
   
      })
  }, [])

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()))

  const handleNewCountry = (e) => {
    setNewCountry(e.target.value)
  }

  const handleShowButton = (country) => {
    console.log(country)
    
  }



  return (
    <>

      <div>
        found countries <input onChange={handleNewCountry} value={newCountry}></input>
      </div>
      <Display countriesToShow={countriesToShow} handleShowButton={handleShowButton}/>

 
    
    </>
  )
}

export default App
