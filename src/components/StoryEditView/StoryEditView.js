import React, { Component, Fragment } from 'react'
import TimerDisplay from '../TimerDisplay/TimerDisplay'
import './StoryEditView.css'

class StoryEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  updateText = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return (
      <main id="story-edit-container">
        <h1 id="prompt">Prompt placeholder</h1>
        <TimerDisplay />
        <input
          id="title"
          type="text"
          onChange={this.updateText}
          placeholder="Enter your title here"
        />
        <input
          id="story"
          type="textarea"
          onChange={this.updateText}
          placeholder="Type your story here"
        />
        <button type="button">Post</button>
      </main>
    );
  }
}

export default StoryEditView;