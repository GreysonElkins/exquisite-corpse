import React from 'react'
import './Instructions.scss'
import GameHistory from '../GameHistory/GameHistory'
import Bookshelf from '../Bookshelf/Bookshelf'
import { Link } from 'react-router-dom'

const Instructions = ( { displayHistory, showHistory, stories, onClick, popup } ) => {
  return (
    <section className="Instructions-sec">
      <div className="game-instructions">
        <h2 className="Instructions-header-text">
          <span className="first-letter">R</span>ules of Play
        </h2>
        <p>
          <b>
            <span className="first-letter">☞</span>{" "}
            <span className="first-letter">E</span>xquisite Corpse is a
            collaborative creative writing game. Participants take turns writing
            shared stories, while only being able to read the last line of the
            previous author's contribution. The result is a fun and
            unpredictable collection of ideas and writing styles that form very
            unique bodies of text.
          </b>
        </p>
        <ul>
          <ol>
            <li>
              Begin a new story or continue one of the stories to the right{" "}
              <span className="first-letter">☞</span>
            </li>
            <li>
              Start your section of the story from a prompt or the last line of
              the previous author
            </li>
            <li>
              Be creative and write fast (you'll have a limited amount of time!)
            </li>
          </ol>
        </ul>
      </div>
      <div className="sidenav">
        <button className="show-history-button" onClick={displayHistory}>
          <span className="first-letter">☞</span> History of Exquisite Corpse
        </button>
        {showHistory ? <GameHistory displayHistory={displayHistory} /> : null}
        <Link to="/story-setup" className="start-new-story-link">
          <span className="first-letter">☞</span> Start a new story
        </Link>
        <h2 className="or">OR</h2>
        <h3 className="text">Continue a story:</h3>
        <div className="continue">
          <Bookshelf
            stories={stories}
            onClick={onClick}
            popup={popup}
          />
        </div>
      </div>
    </section>
  );
}
  
  export default Instructions