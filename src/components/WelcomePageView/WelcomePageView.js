import React, { Component } from "react"
import Instructions from '../Instructions/Instructions'
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
        state: {story: this.state.selectedStory}
      }}
      />
    }

    return (
     <section className="WelcomePage">
        <div>
          <Instructions
            showHistory={this.state.showHistory}
            displayHistory={this.displayHistory}
            stories={this.props.stories}
            onClick={this.takeToWritingSection}
            authorUpdater={this.props.authorUpdater}
          />
        </div>
      </section>
    );
  }
}
  
  export default WelcomePageView