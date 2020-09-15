import React from 'react'
import './StoryEditView.scss'

const LiveDisplay = ({ textInputs }) => {
    return (
      <div id="script-writing-sec">
          <h2>{textInputs.title}</h2>
          <p>{textInputs.story}</p>
      </div>
    );
  }
  
  export default LiveDisplay