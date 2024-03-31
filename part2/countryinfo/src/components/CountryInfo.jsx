const CountryInfo = ({country, languages}) => {

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h4>languages: </h4>
      <ul>
        {languages.map(lang => {
          return <li key={lang}>{lang}</li>
        })}
      </ul>
      <img src={country.flags.png}></img>
    </>
  )
}

export default CountryInfo