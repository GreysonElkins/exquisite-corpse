import React, { Component } from 'react'
import StorySetup from '../StorySetup/StorySetup'

class StorySetupView extends Component {
  constructor() {
    super()
  }

  // method to get prompts based on genre

  // method to select random prompt from returned genre

  render() {
    return (
      <>
        <StorySetup userName={false}/>
      </>
    )
  }
}

export default StorySetupView;