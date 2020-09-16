import React, { Fragment } from 'react'
import Timer from 'react-compound-timer'

const TimerDisplay = (props) => {
  return(
    <Timer 
      initialTime={119000}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => props.disableStoryInput()
        }
      ]}
    >
      <Fragment>
        <Timer.Minutes />:<Timer.Seconds />
      </Fragment>
    </Timer>
  )
}

export default TimerDisplay