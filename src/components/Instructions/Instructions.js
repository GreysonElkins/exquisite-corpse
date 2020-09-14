import React from 'react'
import './Instructions.scss'
import GameHistory from '../GameHistory/GameHistory'
import { Link } from 'react-router-dom'

const Instructions = ( { displayHistory, showHistory } ) => {
  return (
    <section className='Instructions-sec'>
      <h2 className='Instructions-header-text'>
        <span className='first-letter'>R</span>ules of Play
      </h2>
      <div className='game-instructions'>
        <ul>
          <li>
            Exquisite Corpse is a collaborative creative writing game where
            users start or continue shared stories, only being able to read the
            last line of the previous author's submission. The result is a fun
            collection of writing styles all making up one story.
          </li>
          <ol>
            <li>Select a new prompt or continue one of the stories below</li>
            <li>
              Start your section of the story from the prompt or the last line
              of the previous author
            </li>
            <li>
              Be creative and write fast (you'll have a limited amount of time!)
            </li>
          </ol>
        </ul>
      </div>
      <button className='show-history-button' onClick={displayHistory}>
        History of Exquisite Corpse
      </button>
      {showHistory ? <GameHistory displayHistory={displayHistory} /> : null}
      <Link to='/story-setup' className='start-new-story-link'>
        Start a new story
      </Link>
      <h2>OR</h2>
      <h3 className='text'>Continue a story:</h3>
    </section>
  )
}
  
  export default Instructions