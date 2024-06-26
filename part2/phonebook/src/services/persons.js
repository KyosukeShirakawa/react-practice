import axios from 'axios'
const baseUrl ='http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)

}

const update = (id, objectToUpdate) => {
  const request = axios.put(`${baseUrl}/${id}`, objectToUpdate)
  return request.then(response => response.data)
}

const deletePerson = (objectToDelete)=> {
  const request = axios.delete(`${baseUrl}/${objectToDelete.id}`)
  return request.then(response => response.data)
}

export default {getAll, create, update, deletePerson}