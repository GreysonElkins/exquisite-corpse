import React from 'react'
import './GameHistory.scss'
import drawing1 from "../../assets/drawing1.png";
import drawing2 from "../../assets/drawing2.png";
import drawing3 from "../../assets/drawing3.png";
import drawing4 from "../../assets/drawing4.png";
import drawing5 from "../../assets/drawing5.png";
import drawing6 from "../../assets/drawing6.png";
import PropTypes from 'prop-types'

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
        <h2>Examples</h2>
        <div className="game-history-drawings">
          <div className="drawing" style={{ backgroundImage: `url(${drawing1})` }}><p>1929</p></div>
          <div className="drawing" style={{ backgroundImage: `url(${drawing2})` }}><p>1926</p></div>
          <div className="drawing" style={{ backgroundImage: `url(${drawing3})` }}><p>1933</p></div>
          <div className="drawing" style={{ backgroundImage: `url(${drawing4})` }}><p>1934</p></div>
          <div className="drawing" style={{ backgroundImage: `url(${drawing5})` }}><p>1935</p></div>
          <div className="drawing" style={{ backgroundImage: `url(${drawing6})` }}><p>2000</p></div>
        </div>
      </div>
    </div>
  )
}

GameHistory.propTypes = {
  displayHistory: PropTypes.func
}
    
export default GameHistory