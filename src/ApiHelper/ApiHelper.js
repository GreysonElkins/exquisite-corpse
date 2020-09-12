import testData from '../assets/testData/testData'

class ApiHelper {
  static getData = () => {
    return Promise.resolve(testData.stories)
  }
}

export default ApiHelper