import React, { Fragment } from 'react'
import "../StoryEditFields/StoryEditFields.css";

const StoryEditFields = ({ updateText, disabled, prompt }) => {
  return (
    <Fragment>
<<<<<<< HEAD
      {prompt && 
        <h1 id="prompt">{ prompt.prompt }</h1>
      }
=======
      <h1 id="prompt">{prompt}</h1>
>>>>>>> f0b4526adbc124e62b466b1bb6503e72bbd98bb7
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