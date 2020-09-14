import React from 'react'
import './StoryEditView.css'

const LiveDisplay = ({props}) => {
    console.log("c", props)
    return (
      <div id="script-writing-sec">
          <h2>{props.title}</h2>
          <p>{props.story}</p>
      </div>
    );
  }
  
  export default LiveDisplay