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
        className="title-input-box"
        onChange={updateText}
        placeholder="Enter your title here"
      />
      <textarea
        id="story"
        className="story-input-box"
        onChange={updateText}
        maxLength="400"
        placeholder="Type your story here"
        disabled={disabled ? "disabled" : false}
      />
    </Fragment>
  );
}

export default StoryEditFields