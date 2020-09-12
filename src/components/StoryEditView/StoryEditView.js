import React, { Component } from 'react'
import TimerDisplay from '../TimerDisplay/TimerDisplay'
import './StoryEditView.css'

class StoryEditView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <h1 id="prompt">Prompt placeholder</h1>
        <input type="text" placeholder="Enter your title here" />
        <input type="textarea" placeholder="Type your story here" />
        <button type="button">Post</button>
        <TimerDisplay />
      </main>
    )
  }
}

export default StoryEditView;