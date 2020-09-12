import { getDefaultNormalizer } from '@testing-library/react'
import React, { component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'

class Library extends component {
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
}

export default Library