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
        story: [],
        title: '',
        updated_at: '',
        prompt: ''
      }
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

  selectStoryToRead = (story) => {
    this.setState({ currentStory: story})
  }

  render() {
    return (
      <>
        <Bookshelf
          stories={this.state.stories}
          onClick={this.selectStoryToRead}
        />
      {this.state.currentStory.story.length > 0 
        && <PublishedStory 
          currentStory={this.state.currentStory}
          />
      }
      </>
    );
  }
}

export default LibraryView