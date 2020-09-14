const apiHead = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getData = (type, id) => {
    return fetch(`${apiHead}/${type}/${id ? id : ''}`)
      .then(response => response.json())
      .catch(error => error.message)
  }
}

export default ApiHelper