import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import StoryEditFields from '../StoryEditFields/StoryEditFields'
import StoryEditFooter from '../StoryEditFooter/StoryEditFooter'
import './StoryEditView.scss'
import storyRead from '../../assets/backgrounds/storyRead.jpg'
import LiveDisplay from './LiveDisplay'
import PropTypes from 'prop-types'

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
    if (!this.props.author) {
      return <Redirect to="/login" />;
    }
    return (
      <main id="story-edit-section">
        <img id="story-background" src={storyRead} alt/>
        <div id="story-edit-container">
          <StoryEditFields
            story={this.props.location.state.story}
            updateText={this.updateText}
            disabled={this.state.disabled}
          />
          <StoryEditFooter
            disableStoryInput={this.disableStoryInput}
            textInputs={this.state}
            story={this.props.location.state.story}
            author={this.props.author}
            updateStoryData={this.props.updateStoryData}
            addStory={this.props.addStory}
          />
        </div>
        <div id="live-display-container">
          <LiveDisplay textInputs={this.state} />
        </div>
      </main>
    );
  }
}

StoryEditView.propTypes = {
  addStory: PropTypes.func,
  author: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  updateStoryData: PropTypes.func,
}

export default StoryEditView;