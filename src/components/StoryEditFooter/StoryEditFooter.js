import React from "react";
import { Link } from "react-router-dom";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import ApiHelper from '../../ApiHelper/ApiHelper'
import "../StoryEditFooter/StoryEditFooter.scss";
import ApiHelper from "../../ApiHelper/ApiHelper";

const StoryEditFooter = ({ disableStoryInput, textInputs, story, author, addStory, updateStoryData }) => {

  const bodyBuilder = () => {
    const body = {
      contributions: textInputs.story,
      contributors: author.id
    }
    if (!story.id) {
      body.title = textInputs.story
      body.prompt = story.prompt.id
    }
    return body
  }

  return (
    <section id="story-edit-footer">
      <TimerDisplay disableStoryInput={disableStoryInput} />
      <Link to="/">
        <button 
          type="button" 
          id="post-button" 
          onClick={() => {
            const body = bodyBuilder()
            if (!story.id) {
              ApiHelper.postStory(body)  
                .then(story => addStory(story))
            } else {
              ApiHelper.editStory(body)
                .then(story => updateStoryData(story))
            }
          }}
        >
          {!story.id ? "Continue Story" : "Start Story"}
        </button>
      </Link>
      {story.id && (
        <Link to="/">
          <button
            type="button" 
            id="publish-button"
            onClick={() => {
              const body = bodyBuilder()
              body.is_complete = true
              ApiHelper.editStory(body)
                .then(story => updateStoryData(story))
            }}
          >
            Finish Story
          </button>
        </Link>
      )}
    </section>
  )
}

export default StoryEditFooter

