import React, { Component } from "react"
import './WelcomePageView.css'
import Instructions from '../Instructions/Instructions'

class WelcomePageView extends Component {
    constructor() {
      super()
      this.state = {
        showHistory: false,
        inProgressStories: []
      }
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
        </section>
    )
  }
}
  
  export default WelcomePageView