import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
        <button type="button">Submit</button>
      </main>
    )
  }
}

export default StoryEditView;