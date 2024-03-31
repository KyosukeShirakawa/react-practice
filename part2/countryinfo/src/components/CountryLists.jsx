const CountryLists = ({countriesToShow , handleShowButton}) => {

  return (
    <>
      <ul>
        {countriesToShow.map(country => {
          return <li key={country.name.official}>{country.name.common}
                  <button onClick={() => handleShowButton(country)}>
                    show
                  </button>
                </li>
        })}
      </ul>
    </>
  )

}

export default CountryLists 