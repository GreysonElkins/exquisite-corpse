import React from 'react'
import './StoryEditView.scss'

const LiveDisplay = ({props}) => {
    return (
      <div id="script-writing-sec">
          <h2>{props.title}</h2>
          <p>{props.story}</p>
      </div>
    );
  }
  
  export default LiveDisplay