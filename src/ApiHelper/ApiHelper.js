import testData from '../assets/testData/testData'
const baseUrl = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getRandomPrompt = async genre => {
    let response

    if (genre === 'any') {
      response = await fetch(baseUrl + '/prompts/any')
    } else {
      response = await fetch(baseUrl + `/prompts/${genre}`)
    }
    const prompt = await response.json()
    return prompt
  }

  static getData = () => {
    return Promise.resolve(testData.stories)
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