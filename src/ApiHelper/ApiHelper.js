const apiHead = 'http://localhost:3005/api/v1'
const baseUrl = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getData = (type, id) => {
    return fetch(`${apiHead}/${type}/${id ? id : ''}`)
      .then(response => response.json())
  }

  


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


  
}

export default ApiHelper