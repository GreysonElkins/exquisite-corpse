import React, { Fragment } from 'react'
import "../StoryEditFields/StoryEditFields.css";

const StoryEditFields = ({ updateText, disabled, prompt }) => {
  return (
    <Fragment>
      {prompt && 
        <h1 id="prompt">{ prompt.prompt }</h1>
      }
      <input
        id="title"
        type="text"
        onChange={updateText}
        placeholder="Enter your title here" // we can change the value of this to be whatever's passed in - same for line 25
      />
      <textarea
        id="story"
        onChange={updateText}
        placeholder="Type your story here"
        disabled={disabled ? "disabled" : false}
      />
    </Fragment>
  );
}

export default StoryEditFields