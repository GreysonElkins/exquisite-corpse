const apiHead = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getData = (type, id) => {
    return fetch(`${apiHead}/${type}/${id ? id : ''}`)
      .then(response => response.json())
  }
}

export default ApiHelper