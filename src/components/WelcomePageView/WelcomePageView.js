import React, { Component } from "react"
import ApiHelper from '../../ApiHelper/ApiHelper'
import Instructions from '../Instructions/Instructions'
import Bookshelf from "../Bookshelf/Bookshelf"
import { Redirect } from 'react-router-dom'

class WelcomePageView extends Component {
  constructor() {
    super()
    this.state = {
      showHistory: false,
      inProgressStories: [],
      stories: [],
      redirect: false,
      selectedStory: {},
      popup: true
    }
  }

  componentDidMount() {
    const unCompletedStories = []
    ApiHelper.getData().then(stories => {
      stories.forEach(story => {
        if(!story.isComplete) {
          unCompletedStories.push(story)
          this.setState({ stories: unCompletedStories })
        }
      })
    })
  }

  displayHistory = () => {
    this.setState(prevState => {
      return {
          showHistory: !prevState.showHistory
      }
    })
  }

  takeToWritingSection = (story) => {
    let prompt = story.story.slice(-1)
    this.setState({ redirect: true, selectedPrompt: prompt })
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to={{
        pathname: '/story-edit',
        state: this.state.selectedPrompt
      }}
      />
    }

    return (
      <section className="WelcomePage">
        <div>
          <Instructions
            showHistory={this.state.showHistory}
            displayHistory={this.displayHistory}
            stories={this.state.stories}
            onClick={this.takeToWritingSection}
            popup={this.state.popup}
          />
        </div>
      </section>
    );
  }
}
  
  export default WelcomePageView