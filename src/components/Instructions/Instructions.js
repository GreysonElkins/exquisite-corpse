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
        <p>
          <b><span className='first-letter'>☞</span> <span className='first-letter'>E</span>xquisite Corpse is a
          collaborative creative writing game. Participants take turns writing shared stories, 
          while only being able to read the last line of the
          previous author's contribution. The result is a fun and unpredictable
          collection of ideas and writing styles that form very unique bodies of text.</b>
        </p>
        <ul>
          <ol>
            <li>Begin a new story or continue one of the stories below</li>
            <li>
              Start your section of the story from a prompt or the last line
              of the previous author
            </li>
            <li>
              Be creative and write fast (you'll have a limited amount of time!)
            </li>
          </ol>
        </ul>
      </div>
      <button className='show-history-button' onClick={displayHistory}>
        <span className='first-letter'>☞</span> History of Exquisite Corpse
      </button>
      {showHistory ? <GameHistory displayHistory={displayHistory} /> : null}
      <Link to='/story-setup' className='start-new-story-link'>
        <span className='first-letter'>☞</span> Start a new story
      </Link>
      <h2>OR</h2>
      <h3 className='text'>Continue a story:</h3>
    </section>
  )
}
  
  export default Instructions