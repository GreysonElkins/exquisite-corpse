import React, { Fragment } from 'react'
import Timer from 'react-compound-timer'

const TimerDisplay = () => {
  return(
    <Timer 
      initialTime={59000} 
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => console.log('Time\'s up!')
        }
      ]}
    >
      <Fragment>
        <Timer.Seconds />
      </Fragment>
    </Timer>
  )
}

export default TimerDisplay