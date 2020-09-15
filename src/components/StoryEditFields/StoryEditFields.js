import React, { Fragment } from 'react'
import '../StoryEditFields/StoryEditFields.scss';

const StoryEditFields = ({ updateText, disabled, oldStory, prompt }) => {
  // console.log(oldStory)
  return (
    <Fragment>
      {oldStory.prompt !== null && (
        <h1 id="prompt">PROMPT: {oldStory.prompt.prompt}</h1>
      )}
      {prompt !== {} 
        && <h1 id="prompt">PROMPT: {prompt.prompt}</h1>
      }
      LAST WORDS: . . .{"testing for now"}
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