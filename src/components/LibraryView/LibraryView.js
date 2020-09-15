import React, { Component } from 'react'
import Bookshelf from '../Bookshelf/Bookshelf'
import PublishedStory from '../PublishedStory/PublishedStory'
import PropTypes from 'prop-types'

class LibraryView extends Component {
  constructor() {
    super()
    this.state = {
      currentStory: {
        contributions: [],
        title: '',
        updated_at: '',
        prompt: null,
        is_complete: true,
        contributors: []
      }
    }
  }

  selectStoryToRead = (story) => {
    this.setState({ currentStory: story })
  }

  render() {
    return (
      <>
        <Bookshelf
          stories={this.props.stories}
          authorUpdater={this.props.authorUpdater}
          onClick={this.selectStoryToRead}
          toggleHover={this.props.toggleHover}
        />
        {this.state.currentStory.title !== "" && (
          <PublishedStory currentStory={this.state.currentStory} />
        )}
      </>
    );
  }
}

LibraryView.propTypes = {
  authorUpdater: PropTypes.func,
  stories: PropTypes.array,
  toggleHover: PropTypes.func
}

export default LibraryView