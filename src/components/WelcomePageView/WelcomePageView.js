import React, { Component } from "react"
import './WelcomePageView.css'
import PromptCards from '../PromptCards/PromptCards'

class WelcomePageView extends Component {
    constructor() {
      super()
      this.state = {
        showHistory: false,
        inProgressStories: []
      }
    }
  
    async componentDidMount() {
     console.log('Youre smart!') 
     this.setState({ inProgressStories: [
         "It was a dark and stormy party and suddenly the doorbell rang...",
         "The warp core is putting off unusual photon emissions...",
         "With a wave of the wand, the wizard cast a spell and suddenly...",
         "There is a suspicious trail of cheetos leading down this hall...",
         "For the first time in over 35 years, the vault doors groaned as they slowly creaked open..."
      ]
     })
    }

    showHistory = () => {
      this.setState(prevState => {
        return {
            showHistory: !prevState.showHistory
        }
      })
    }
   
    render() {
      return (
        <section className="WelcomePage">
          <aside className="WelcomePage-left-side-sec">
          <h2 className="WelcomePage-header-text">Rules of Play</h2>
          <div className="game-instructions">
            <ul>
              <li>Exquisite Corpse is a collaborative creative writing game where users start or continue shared stories, 
                  only being able to read the last line of the previous author's submission. The result is a fun collection of writing styles all making up one story.</li>
              <ol>
                <li>Select a new prompt or continue one of the stories below</li>
                <li>Start your section of the story from the prompt or the last line of the previous author</li>
                <li>Be creative and write fast (you'll have a limited amount of time!)</li>
              </ol>
            </ul>
          </div>
          <div className="drop-arrow-sec"><button className="drop-arrow-button" onClick={this.showHistory}>></button><p className="show-history-text">History of the Game</p></div>
          {this.state.showHistory &&
            <div className="game-history-box">
              <p>
                 Exquisite Corpse, also known as <i>Exquisite Cadaver</i> is a game that gained popularity in artistic circles during the 1920s when it was 
                 adopted as a technique by artists of the Surrealist movement to generate collaborative compositions. 
                 The name comes from the phase <q>Le cadavre exquis boira le vin nouveau.</q> ("The exquisite corpse shall drink the new wine.")
                 Exquisite Corpse very is similar to the parlour game <i>Consequences</i>.
                 The original game consisted of participants taking turns writing or drawing on a sheet of paper, 
                 folding it to conceal his or her contribution (except a small portion), and then passing it to the next player for a further contribution.
                 The game started as a fun way to pass time but later became an enriching experience for artists, writers and students alike.
              </p>
            </div>
          }
          </aside>
          <section className="WelcomePage-right-side-sec">
            <h3>Continue a story:</h3>
            <div>
              <PromptCards 
                inProgressStories={this.state.inProgressStories}
              />
            </div>
          </section>
        </section>
    )
  }
}
  
  export default WelcomePageView