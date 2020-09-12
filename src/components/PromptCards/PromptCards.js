import React from 'react'
import './PromptCards.css'
import { Link } from 'react-router-dom'

const PromptCards = ( { inProgressStories } ) => {
    const stories = inProgressStories.map(story => {
      return (
        <div className="PromptCards">
          <p>{story}</p>
          <Link to='story-setup'>Start</Link>
        </div>
      )
    })
  
    return (
      <div className="PromptCards-sec">
          {stories}
      </div>
    )
  }
  
  export default PromptCards
  