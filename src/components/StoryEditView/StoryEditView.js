import React, { Component, Fragment } from 'react'
// import Timer from '../Timer/Timer'
import Timer from 'react-compound-timer';
import './StoryEditView.css'

class StoryEditView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <h1 id="prompt">Prompt placeholder</h1>
        <input type="text" placeholder="Enter your title here" />
        <input type="textarea" placeholder="Type your story here" />
        <button type="button">Post</button>
        <Timer initialTime={60000} direction="backward">
          {() =>
            <Fragment>
              <Timer.Minutes />
              <Timer.Seconds />
            </Fragment>
          }
        </Timer>
      </main>
    )
  }
}

export default StoryEditView;