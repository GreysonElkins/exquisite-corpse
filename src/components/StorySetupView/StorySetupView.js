import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import StorySetup from '../StorySetup/StorySetup'
import './StorySetupView.scss'
import PropTypes from 'prop-types'

class StorySetupView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitOk: false,
      promptRequested: false,
      randomPrompt: null
    }
  }

  startWriting = async (event) => {
    event.preventDefault()
    this.setState({
      submitOk: true
    });
  }

  getRandomPrompt = (genre) => {
    let prompts
    let qty
    if (genre === 'any') {
      prompts = this.props.prompts
    } else {
      prompts = this.props.prompts.filter(prompt => prompt.genre === genre) 
    }
    qty = prompts.length
    const randomIndex = Math.floor(Math.random() * (qty - 1))
    this.setState({ randomPrompt: prompts[randomIndex] })
    console.log('found a prompt', this.state.randomPrompt)
  }
  
  removePrompt = () => {
    this.setState({ randomPrompt: null })
    console.log(`it's gone now`)
  }

  render = () => {
    if (!this.props.currentUser.name) {
      return (
        <Redirect to="/login" />
      )
    }
    if (this.state.submitOk) {
      return (
        <Redirect
          to={{
            pathname: "/story-edit",
            state: {story: {
              id: undefined,
              prompt: this.state.randomPrompt,
              title: undefined,
            }}
          }}
        />
      )
    }
    return (
      <section className="StorySetupView">
        <StorySetup
          prompts={this.props.prompts}
          userName={this.props.username}
          startWriting={this.startWriting}
          getRandomPrompt={this.getRandomPrompt}
          removePrompt={this.removePrompt}
          randomPrompt={this.state.randomPrompt}
          error={this.state.error}
        />
      </section>
    );
  }
}

StorySetup.propTypes = {
  addStory: PropTypes.func,
  author: PropTypes.object,
  prompts: PropTypes.array,
  updateStoryData: PropTypes.func,
}

export default StorySetupView;