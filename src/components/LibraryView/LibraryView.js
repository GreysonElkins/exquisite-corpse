import { getDefaultNormalizer } from '@testing-library/react'
import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'
import Bookshelf from '../Bookshelf/Bookshelf'

class LibraryView extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      currentStory: {}
    }
  }

  componentDidMount() {
    const completedStories = []
    ApiHelper.getData().then(stories => {
      stories.forEach(story => {
        if(story.isComplete) {
          completedStories.push(story)
          this.setState( {stories: completedStories})
        }
      })
    })
  }

  selectStoryToRead() {
    console.log('this will eventually cause a story component to render')
  }

  render() {
    return (
      <>
        <Bookshelf
          stories={this.state.stories}
          onClick={this.selectStoryToRead}
        />
      </>
    );
  }
}

export default LibraryView