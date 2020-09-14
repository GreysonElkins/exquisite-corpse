import React, { Component } from 'react'
import StoryEditFields from '../StoryEditFields/StoryEditFields'
import StoryEditFooter from '../StoryEditFooter/StoryEditFooter'
import './StoryEditView.css'

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
      <main id="story-edit-container">
        <StoryEditFields 
<<<<<<< HEAD
          prompt={ this.props.location.state.prompt }
=======
          prompt={ this.props.location.state }
>>>>>>> f0b4526adbc124e62b466b1bb6503e72bbd98bb7
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