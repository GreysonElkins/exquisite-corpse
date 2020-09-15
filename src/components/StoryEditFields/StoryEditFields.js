import React, { Fragment } from 'react'
import '../StoryEditFields/StoryEditFields.scss';

const StoryEditFields = ({ updateText, disabled, story }) => {

  return (
    <Fragment>
      {story.prompt && 
        <h1 id="prompt">PROMPT: {story.prompt.prompt}</h1>
      }
      {story.lastWords && 
        <h1 id="lastWords">LAST WORDS: {story.lastWords}</h1>
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