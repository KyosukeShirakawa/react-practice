const Filter = ({text, handleSearchName}) => {

  return (
    <div>
      {text} 
      <input onChange={handleSearchName}></input>
    </div>

  )

}


export default Filter