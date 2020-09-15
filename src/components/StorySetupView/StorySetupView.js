import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import StorySetup from '../StorySetup/StorySetup'
import './StorySetupView.scss'

class StorySetupView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitOk: false,
      promptRequested: false,
      randomPrompt: null
    }
  }

  startWriting = async (event, desiredGenre) => {
    event.preventDefault()
    let prompt = null;
    if(desiredGenre) {
      prompt = this.getRandomPrompt(desiredGenre)
    }
    this.setState({
      randomPrompt: prompt,
      submitOk: true
    });
  }

  getRandomPrompt(genre) {
    let prompts
    let qty
    if (genre === 'any') {
      prompts = this.props.prompts
    } else {
      prompts = this.props.prompts.filter(prompt => prompt.genre === genre) 
    }
    qty = prompts.length
    const randomIndex = Math.floor(Math.random() * (qty - 1))
    return prompts[randomIndex]
  }

  render = () => {
    if (this.state.submitOk) {
      return (
        <Redirect
          to={{
            pathname: "/story-edit",
            state: {story: {
              prompt: this.state.randomPrompt,
              title: undefined,
              author: this.props.author,
              addStory: this.addStory,
              updateStoryData: this.props.updateStoryData
            }}
          }}
        />
      )
    }
    return (
      <section className="StorySetupView">
        <StorySetup
          prompts={this.props.prompts}
          userName={"Bango Zango" /*this.props.username*/}
          startWriting={this.startWriting}
          error={this.state.error}
        />
      </section>
    );
  }
}

export default StorySetupView;