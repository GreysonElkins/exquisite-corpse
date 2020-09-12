import React from 'react'
import './PromptCards.css'

const PromptCards = ( { inProgressStories } ) => {
    const stories = inProgressStories.map(story => {
      return (
        <div className="PromptCards">
          <p>{story}</p>
          <button className="start-button">start</button>
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
  