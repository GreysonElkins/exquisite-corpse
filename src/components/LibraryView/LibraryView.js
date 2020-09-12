import { getDefaultNormalizer } from '@testing-library/react'
import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'
import Bookshelf from '../Bookshelf/Bookshelf'

class LibraryView extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
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

  render() {
    return (
      <>
        <Bookshelf />
      </>
    )
  }
}

export default LibraryView