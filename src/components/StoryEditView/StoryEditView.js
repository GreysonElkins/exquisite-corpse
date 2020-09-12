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

  render() {
    return (
      <main id="story-edit-container">
        <h1 id="prompt">Prompt placeholder</h1>
        <input
          id="title"
          type="text"
          onChange={this.updateText}
          placeholder="Enter your title here"
        />
        <textarea
          id="story"
          onChange={this.updateText}
          placeholder="Type your story here"
        />
        <TimerDisplay />
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
      </main>
    );
  }
}

export default StoryEditView;