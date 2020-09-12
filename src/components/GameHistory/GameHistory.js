import React from 'react'
import './GameHistory.css'

const GameHistory = ( { displayHistory } ) => {
    return (
      <div className="game-history-box">
        <div className="game-history-content">
        <span className="close" onClick={displayHistory}>
          &times;
        </span>
        <p>
           Exquisite Corpse, also known as <i>Exquisite Cadaver</i> is a game that gained popularity in artistic circles during the 1920s when it was 
           adopted as a technique by artists of the Surrealist movement to generate collaborative compositions. 
           The name comes from the phase <q>Le cadavre exquis boira le vin nouveau.</q> ("The exquisite corpse shall drink the new wine.")
           Exquisite Corpse very is similar to the parlour game <i>Consequences</i>.
           The original game consisted of participants taking turns writing or drawing on a sheet of paper, 
           folding it to conceal his or her contribution (except a small portion), and then passing it to the next player for a further contribution.
           The game started as a fun way to pass time but later became an enriching experience for artists, writers and students alike.
        </p>
        <div className="game-history-drawings">  
        </div>
        </div>
      </div>
    )
  }
    
    export default GameHistory