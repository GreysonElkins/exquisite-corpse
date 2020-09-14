import testData from '../assets/testData/testData'
const baseUrl = 'http://localhost:3005/api/v1'

class ApiHelper {
  static getRandomPromptFromAll = async () => {
    const response = await fetch(baseUrl + '/prompts/any')
    const prompt = await response.json()

    return prompt
  }

  static getData = () => {
    return Promise.resolve(testData.stories)
  }
}

export default ApiHelper