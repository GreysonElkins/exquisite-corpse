import React, { Component } from 'react'
import StorySetup from '../StorySetup/StorySetup'
import './StorySetupView.css'

class StorySetupView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '420',
      prompt: ''
    }
  }

  getPrompts(genre) {
    apiHelper.getPrompts(genre)
      .then(prompts => this.setState({
        prompt: prompts[Math.floor(Math.random() * prompts.length)]
      }))
      .catch(error => this.setState({ error: error.status })
    )
  }

  render() {
    return (
      <section className='StorySetupView'>
        {this.state.error && 
        <h2>
          I'm sorry, we could not retrieve a prompt. Error Status: {this.state.error}
        </h2>
        }
        <StorySetup userName={'Dr Robotnik'} prompt={this.state.prompt} />
      </section>
    )
  }
}

export default StorySetupView;