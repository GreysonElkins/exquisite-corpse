import React from "react";
import { Link } from "react-router-dom";
import TimerDisplay from "../TimerDisplay/TimerDisplay";

const StoryEditFooter = ({ disableStoryInput, isPublishable }) => {
  return (
    <section id="story-edit-footer">
      <TimerDisplay disableStoryInput={disableStoryInput} />
      <Link to="/">
        <button type="button" id="post-button">
          Pass it on
        </button>
      </Link>
      {isPublishable && (
        <Link to="/">
          <button type="button" id="publish-button">
            Publish it
          </button>
        </Link>
      )}
    </section>
  );
}

export default StoryEditFooter

