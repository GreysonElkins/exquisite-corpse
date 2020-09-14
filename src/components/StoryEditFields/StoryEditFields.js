import React, { Fragment } from 'react'
import '../StoryEditFields/StoryEditFields.scss';

const StoryEditFields = ({ updateText, disabled, oldStory }) => {
  // console.log(oldStory)
  return (
    <Fragment>
      {oldStory.prompt !== null &&
        <h1 id="prompt">PROMPT: { oldStory.prompt.prompt }</h1>
      }
      LAST WORDS: . . .{'testing for now'}
      <input
        id='title'
        type='text'
        onChange={updateText}
        placeholder='Enter your title here' // we can change the value of this to be whatever's passed in - same for line 25
      />
      <textarea
        id='story'
        onChange={updateText}
        placeholder='Type your story here'
        disabled={disabled ? 'disabled' : false}
      />
    </Fragment>
  );
}

export default StoryEditFields