import React, { Component } from 'react'
import StoryEditFields from '../StoryEditFields/StoryEditFields'
import StoryEditFooter from '../StoryEditFooter/StoryEditFooter'
import './StoryEditView.scss'
import LiveDisplay from './LiveDisplay'

class StoryEditView extends Component {
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
      <main id="story-edit-section">
        <div id="story-edit-container">
          <StoryEditFields
            story={this.props.location.state.story}
            updateText={this.updateText}
            disabled={this.state.disabled}
          />
          <StoryEditFooter
            disableStoryInput={this.disableStoryInput}
            story={this.props.location.state.story}
            textInputs={this.state}
            author={this.props.location.state.author}
          />
        </div>
        <div id="live-display-container">
          <LiveDisplay textInputs={this.state} />
        </div>
      </main>
    )
  }
}

export default StoryEditView;