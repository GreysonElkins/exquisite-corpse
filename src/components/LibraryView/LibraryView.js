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

  // async componentDidMount() {
  //   const completedStories = []
  //   ApiHelper.getData('stories')
  //   .then(stories => {

  //     stories.forEach(async (story) => {
  //       if(story.is_complete) {
  //         await story.prompt 
  //           && ApiHelper.getData('prompts', story.prompt)
  //             .then(prompt => story.prompt = prompt[0])
  //         await story.contributors.forEach((author, i) => {
  //           ApiHelper.getData('authors', author)
  //             .then(foundAuthor => story.contributors[i] = foundAuthor)
  //         })
  //         completedStories.push(story)
  //         this.setState({ stories: completedStories })
  //       }
  //     }) 
  //   })
  // }

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
          popup={false}
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