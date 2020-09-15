const apiHead = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getData = (type, id) => {
    return fetch(`${apiHead}/${type}/${id ? id : ''}`)
      .then(response => response.json())
      .catch(error => error.message)
  }

  static postLogin = async (loginInfo) => {
    try {
      return await fetch(apiHead + '/authors/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      })
    } catch (error) {
      return error
    }
  }

  static postStory = async (story) => {
    try {
      return await fetch(`${apiHead}/stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story)
      })
    } catch (error) {
      return error
    }
  }
  
  static editStory = async (story) => {
    try {
      return await fetch(`${apiHead}/stories/${story.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story)
      })
    } catch (error) {
      return error
    }
  }
}

export default ApiHelper