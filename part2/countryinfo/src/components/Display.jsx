import CountryInfo from "./CountryInfo"
import CountryLists from "./CountryLists"

const Display = ({countriesToShow, handleShowButton}) => {
  if(countriesToShow.length > 10){
    return <p>Too many matches, specify another filter</p>
  }

  if(countriesToShow.length === 1){
    const country = countriesToShow[0]
    const languages = []
    {for (const lang in country.languages) {
      languages.push(country.languages[lang])
    }}
 

    return (  
      <CountryInfo country={country} languages={languages}/>
    )
  }

  return (
    <CountryLists countriesToShow={countriesToShow} handleShowButton={handleShowButton}/>
  )

}

export default Display