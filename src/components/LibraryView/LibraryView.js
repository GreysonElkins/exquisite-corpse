import { findAllByAltText } from '@testing-library/react'
import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'
import Bookshelf from '../Bookshelf/Bookshelf'
import PublishedStory from '../PublishedStory/PublishedStory'

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
        />
      {this.state.currentStory.title !== '' 
        && <PublishedStory 
          currentStory={this.state.currentStory}
          />
      }
      </>
    );
  }
}

export default LibraryView