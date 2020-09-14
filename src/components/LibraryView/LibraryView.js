import { findAllByAltText } from '@testing-library/react'
import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'
import Bookshelf from '../Bookshelf/Bookshelf'
import PublishedStory from '../PublishedStory/PublishedStory'

class LibraryView extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
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

  componentDidMount() {
    const completedStories = []
    ApiHelper.getData('stories')
    .then(stories => {
      stories.forEach(story => {
        if(story.is_complete) {
          completedStories.push(story)
          this.setState({ stories: completedStories })
        }
      })
      
    })
  }

  selectStoryToRead = (story) => {
    this.setState({ currentStory: story })
    this.findAuthors(story.contributors)
  }

  findAuthors = (ids) => {
    ApiHelper.getData('authors', id)
  }

  render() {
    return (
      <>
        <Bookshelf
          stories={this.state.stories}
          onClick={this.selectStoryToRead}
          popup={false}
        />
      {this.state.currentStory.contributions.length > 0 
        && <PublishedStory 
          currentStory={this.state.currentStory}
          />
      }
      </>
    );
  }
}

export default LibraryView