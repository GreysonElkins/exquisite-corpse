import React, { Component } from "react"
import './WelcomePageView.css'
import ApiHelper from '../../ApiHelper/ApiHelper'
import Instructions from '../Instructions/Instructions'
import LibraryView from '../LibraryView/LibraryView'
import PromptCards from '../PromptCards/PromptCards'
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
      currentPage: 'home'
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

    /// just test info, will be chnaged after api is hooked up
    this.setState({ inProgressStories: [
        "It was a dark and stormy party and suddenly the doorbell rang...",
        "The warp core is putting off unusual photon emissions...",
        "With a wave of the wand, the wizard cast a spell and suddenly...",
        "There is a suspicious trail of cheetos leading down this hall...",
        "For the first time in over 35 years, the vault doors groaned as they slowly creaked open..."
     ]
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
    console.log(story.id)
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
            />
          </div>
          {/* <div>
            <PromptCards 
              inProgressStories={this.state.inProgressStories}
            />
          </div> */}
          <Bookshelf
            stories={this.state.stories}
            onClick={this.takeToWritingSection}
            currentPage={this.state.currentPage}
          />
      </section>
    )
  }
}
  
  export default WelcomePageView