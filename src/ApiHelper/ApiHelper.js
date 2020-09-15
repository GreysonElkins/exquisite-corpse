const apiHead = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getData = (type, id) => {
    return fetch(`${apiHead}/${type}/${id ? id : ''}`)
      .then(response => response.json())
      .catch(error => error.message)
  }

  static postLogin = async (loginInfo) => {
    try {
    const response = await fetch(baseUrl + '/authors/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
    return response
    } catch (error) {
      return error
    }
  }
}

export default ApiHelper