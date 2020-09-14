import React, { Component } from 'react'
import StorySetup from '../StorySetup/StorySetup'
import './StorySetupView.css'

class StorySetupView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      prompt: ''
    }
  }

  render() {
    return (
      <section className='StorySetupView'>
        {this.state.error && 
        <h2>
          I'm sorry, we could not retrieve a prompt. Error Status: {this.state.error}
        </h2>
        }
        <StorySetup
          userName={'Bango Zango' /*this.props.username*/}
          getPrompts={this.getPrompts}
          prompt={this.state.prompt}
          error={this.state.error}
        />
      </section>
    )
  }
}

export default StorySetupView;