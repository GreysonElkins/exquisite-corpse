import React, { Component } from 'react'
import StoryEditFields from '../StoryEditFields/StoryEditFields'
import StoryEditFooter from '../StoryEditFooter/StoryEditFooter'
import LiveDisplay from './LiveDisplay'
import './StoryEditView.css'

class StoryEditView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  updateText = e => {
    this.setState({ [e.target.id]: e.target.value })
    console.log(this.state)
  }

  disableStoryInput = () => {
    this.setState({ disabled: true })
  }

  render() {
    return (
      <main id="story-edit-section">
        <div id="story-edit-container">
          <StoryEditFields 
            prompt={ this.props.location.state.prompt }
            updateText={ this.updateText } 
            disabled={ this.state.disabled }
          />
          <StoryEditFooter 
            disableStoryInput={ this.disableStoryInput }
          />
        </div>
        <div id="live-display-container">
          <LiveDisplay 
            props={this.state}
          />
        </div>
      </main>

    );
  }
}

export default StoryEditView;