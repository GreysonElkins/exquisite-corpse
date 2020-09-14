import React from 'react'
import { Redirect } from 'react-router-dom'
import ApiHelper from '../../ApiHelper/ApiHelper'
import './StorySetup.css'

const StorySetup = (props) => {
  if (props.submitOk) {
    return <Redirect to={{
        pathname: '/story-edit',
        state: { prompt: props.prompt }
      }}
    />
  }
  return (
    <form className='StorySetup' onSubmit={props.handleSubmit}>
      {!props.userName && 
      <label>
        Who Are You?<br/>
        <input
          name='authorName'
          type='text'
          placeholder='create your pen name'
          value={props.authorname}
          onChange={props.handleChange}
        />
      </label>
      }
      {props.userName && <p>Hello {props.userName},</p>}
      <br/>
      <label>
        Would you like to start with a prompt? <br/>
        Check box for <b><i>"Yes"</i></b> - 
        <input
          name='promptRequested'
          type='checkbox'
          checked={props.promptRequested}
          onChange={props.handleChange}
        />
      </label>
      <br/>
      {props.promptRequested &&
      <label>
        Please select a genre:
        <select
          name='genre'
          value={props.genre}
          onChange={props.handleChange}
        >
          <option value='any'>Any</option>
          <option value='dystopian'>Dystopian</option>
          <option value='fantasy'>Fantasy</option>
          <option value='mystery'>Mystery</option>
          <option value='romance'>Romance</option>
          <option value='science fiction'>Science Fiction</option>
          <option value='superhero'>Superhero</option>
        </select>
      </label>
      }
      <p>
        You will have 60 seconds to free-write on the next screen.<br/>
        {props.promptRequested && 
        <span>Your prompt will be displayed at the top if the view.<br/></span>
        }
        The countdown will begin when you start typing.<br/>
        When the timer runs out you will no longer be able to type.<br/>
        <br/>
        Have Fun!
      </p>
      <button>Start Story</button>
    </form>
  )
}

export default StorySetup