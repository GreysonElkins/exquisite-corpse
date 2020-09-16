const apiHead = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getData = (type, id) => {
    return fetch(`${apiHead}/${type}/${id ? id : ''}`)
      .then(response => response.json())
      .catch(error => error.message)
  }

  static postLogin = async (loginInfo) => {
    try {
      return await fetch(apiHead + "/authors/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      })
    } catch (error) {
      return error
    }
  }

  static postStory = async (story, id) => {
    try {
      return await fetch(`${apiHead}/stories/${id? id : ''}`, {
        method: `${id? 'PATCH' : 'POST'}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story)
      }).then(response => response.json())
    } catch (error) {
      return error
    }
  }

  static createUser = async (user) => {
    try {
      return await fetch(`${apiHead}/authors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
    } catch (error) {
      return error
    }
  }

  static postAuthor = async (user, id) => {
    try {
      return await fetch(`${apiHead}/authors/${id ? id : ""}`, {
        method: `${id ? "PATCH" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
    } catch (error) {
      return error;
    }
  }
}

export default ApiHelper
