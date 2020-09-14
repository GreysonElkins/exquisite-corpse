import React, { Component } from 'react'
import StoryEditFields from '../StoryEditFields/StoryEditFields'
import StoryEditFooter from '../StoryEditFooter/StoryEditFooter'
import './StoryEditView.scss'

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
    // console.log(this.props.location.state)
    return (
      <main id="story-edit-container">
        <StoryEditFields 
          oldStory={ this.props.location.state }
          updateText={ this.updateText } 
          disabled={ this.state.disabled }
        />
        <StoryEditFooter 
          disableStoryInput={ this.disableStoryInput }
        />
      </main>
    );
  }
}

export default StoryEditView;