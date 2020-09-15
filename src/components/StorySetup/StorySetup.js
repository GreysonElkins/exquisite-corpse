import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import ApiHelper from '../../ApiHelper/ApiHelper'
import './StorySetup.scss'

class StorySetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promptRequested: false,
      desiredGenre: ''
    }
  }

  updateForm = (event) => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  promptCheckBox = (isChecked) => {
    return (
      <label>
        Would you like to start with a prompt? <br/>
        Check box for <b><i>"Yes"</i></b> - 
        <input
          name='promptRequested'
          type='checkbox'
          checked={isChecked}
          onChange={this.updateForm}
        />
      </label>
    )
  }

  genreDropDown = (prompts) => {
    const options = prompts.reduce((genreList, prompt) => {
      if (genreList.includes(prompt.genre) === false) {
        genreList.push(prompt.genre)
      }
      return genreList
    }, [])
    
    const dropDown = options.reduce((selectOptions, genre) => {
      selectOptions.push(
        <option value={genre}>
          {genre}
        </option>
      )
      return selectOptions
    }, [<option value='any'>any</option>])

    return (
      <select
        name='desiredGenre'
        value={this.state.desiredGenre}
        onChange={this.updateForm}
      >
        {dropDown}
      </select>
    )
  }

  rulesOfTheGame = () => {
    return (
      <>
        <p>
          You will have 60 seconds to free-write on the next screen.<br/>
          {this.state.promptRequested && 
          <span>Your prompt will be displayed at the top of the view.<br/></span>
          }
          The countdown will begin when you start typing.<br/>
          When the timer runs out you will no longer be able to type.<br/>
          <br/>
          Have Fun!
        </p>
        <button>Start Story</button>
      </>
    )
  }

  render() {
    return (
      <form 
        className='StorySetup' 
        onSubmit={(event) => {
          this.props.startWriting(event, this.state.desiredGenre)
        }}
      >
        {this.props.userName && 
          <><p>Hello {this.props.userName},</p><br/></>}
        {this.promptCheckBox(this.state.promptRequested)}
        {this.state.promptRequested &&
          <>
            <label>
              Please select a genre:
              {this.genreDropDown(this.props.prompts)}
            </label>
            <br/>
          </>
        }
        {this.rulesOfTheGame()}
      </form>
    )
  }
}

export default StorySetup