import React, { Component } from "react"
import './WelcomePageView.css'
import Instructions from '../Instructions/Instructions'
import LibraryView from '../LibraryView/LibraryView'
import PromptCards from '../PromptCards/PromptCards'

class WelcomePageView extends Component {
    constructor() {
      super()
      this.state = {
        showHistory: false,
        inProgressStories: []
      }
    }

    componentDidMount() {
      /// just test info, will be chnaged after api is hooked up
      this.setState({ inProgressStories: [
          "It was a dark and stormy party and suddenly the doorbell rang...",
          "The warp core is putting off unusual photon emissions...",
          "With a wave of the wand, the wizard cast a spell and suddenly...",
          "There is a suspicious trail of cheetos leading down this hall...",
          "For the first time in over 35 years, the vault doors groaned as they slowly creaked open..."
      ]})
    }

    displayHistory = () => {
      this.setState(prevState => {
        return {
            showHistory: !prevState.showHistory
        }
      })
    }

    render() {
      return (
        <section className="WelcomePage">
            <div>
              <Instructions 
                showHistory={this.state.showHistory}
                displayHistory={this.displayHistory}
              />
            </div>
            <div>
              <PromptCards 
                inProgressStories={this.state.inProgressStories}
              />
            </div>
            <LibraryView />
        </section>
    )
  }
}
  
  export default WelcomePageView