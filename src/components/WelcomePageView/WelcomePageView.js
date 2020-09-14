import React, { Component } from "react"
import ApiHelper from '../../ApiHelper/ApiHelper'
import Instructions from '../Instructions/Instructions'
import Bookshelf from "../Bookshelf/Bookshelf"
import { Redirect } from 'react-router-dom'

class WelcomePageView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHistory: false,
      redirect: false,
      selectedStory: {}
    }
  }

  displayHistory = () => {
    this.setState(prevState => {
      return {
          showHistory: !prevState.showHistory
      }
    })
  }

  takeToWritingSection = (story) => {
    this.setState({ redirect: true, selectedStory: story })
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      console.log(this.state)
      return <Redirect to={{
        pathname: '/story-edit',
        state: this.state.selectedStory
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
          <Bookshelf
            stories={this.props.stories}
            authorUpdater={this.props.authorUpdater}
            onClick={this.takeToWritingSection}
          />
      </section>
    )
  }
}
  
  export default WelcomePageView