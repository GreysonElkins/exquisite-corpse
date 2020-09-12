import React from 'react'
import './PromptCards.css'
import { Link } from 'react-router-dom'

const PromptCards = ( { inProgressStories } ) => {
  const stories = inProgressStories.map(story => {
    return (
      <div className="PromptCards">
        <p>{story}</p>
        <Link to='/story-setup'>Start</Link>
      </div>
    )
  })
  
  return (
    <div className="library-sec">
      <div className="PromptCards-sec">
          {stories}
      </div>
      <h3 className="published-stories-text" >View Published Stories</h3>
    </div>
  )
}
  
export default PromptCards