import React from 'react'
import './StoryEditView.scss'
import PropTypes from 'prop-types'

const LiveDisplay = ({ textInputs }) => {
    return (
      <div id="script-writing-sec">
          <h2>{textInputs.title}</h2>
          <p>{textInputs.story}</p>
      </div>
    );
  }

  LiveDisplay.propTypes = {
    textInputs: PropTypes.object
  }
  
  export default LiveDisplay