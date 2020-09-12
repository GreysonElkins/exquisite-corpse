import React from 'react'
import './Instructions.css'
import { Link } from 'react-router-dom'

const Instructions = ( { displayHistory, showHistory } ) => {
  return (
    <section className="Instructions-sec">
    <h2 className="Instructions-header-text">Rules of Play</h2>
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
      <div className="drop-arrow-sec"><button className="drop-arrow-button" onClick={displayHistory}></button><p className="show-history-text">History of the Game</p></div>
      {showHistory &&
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
      <h3>Continue a story:</h3>
      <Link to='story-setup'>Start a new story</Link>
    </section>
  )
}
  
  export default Instructions
  