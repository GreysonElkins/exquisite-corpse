import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TimerDisplay from '../TimerDisplay/TimerDisplay'
import './StoryEditView.css'

class StoryEditView extends Component {
  // This was written with the assumption that the prompt / last sentence of
  // previous story will be passed in as props
  constructor(props) {
    super(props)
    this.state = {}
  }

  updateText = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  disableStoryInput = () => {
    this.setState({ disabled: true })
  }

  render() {
    return (
      <main id="story-edit-container">
        <h1 id="prompt">Prompt placeholder</h1>
        <input
          id="title"
          type="text"
          onChange={this.updateText}
          placeholder="Enter your title here" // we can change the value of this to be whatever's passed in - same for line 25
        />
        <textarea
          id="story"
          onChange={this.updateText}
          placeholder="Type your story here"
          disabled={this.state.disabled ? "disabled" : false}
        />
        <section id="story-edit-footer">
          <TimerDisplay disableStoryInput={this.disableStoryInput} />
          <Link to="/">
            <button type="button" id="post-button">
              Pass it on
            </button>
          </Link>
          {this.props.isPublishable && (
            <Link to="/">
              <button type="button" id="publish-button">
                Publish it
              </button>
            </Link>
          )}
        </section>
      </main>
    );
  }
}

export default StoryEditView;