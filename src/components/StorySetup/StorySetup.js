import React, { Component } from 'react'
import './StorySetup.scss'

class StorySetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promptRequested: false,
      desiredGenre: 'any'
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
        {!this.state.promptRequested && (
          <span>
            Would you like to start with a prompt? <br />
            ( You don't have to - feel free to start however you'd like! ) <br />
          </span>
        )}
        Check box for{" "}
        <b>
          <i>"Yes"</i>
        </b>{" "}
        -
        <input
          name="promptRequested"
          type="checkbox"
          checked={isChecked}
          onChange={(event) => {
            this.updateForm(event);
            if (!event.target.checked) {
              this.setState({ desiredGenre: "" });
              this.props.removePrompt();
            } else {
              this.props.getRandomPrompt("any");
            }
          }}
        />
      </label>
    );
  }

  genreDropDown = (prompts) => {
    const options = prompts.reduce((genreList, prompt) => {
      if (genreList.includes(prompt.genre) === false) {
        genreList.push(prompt.genre)
      }
      return genreList
    }, [])
    
    const dropDown = options.reduce((selectOptions, genre, i) => {
      selectOptions.push(
        <option value={genre} key={`genre${i}`}>
          {genre}
        </option>
      )
      return selectOptions
    }, [<option value='any' key='any'>any</option>])

    return (
      <select
        name='desiredGenre'
        value={this.state.desiredGenre}
        onChange={(event) => {
          this.updateForm(event)
          this.props.getRandomPrompt(event.target.value);
        }}
      >
        {dropDown}
      </select>
    )
  }

  rulesOfTheGame = () => {
    return (
      <>
        <p>
          You will have 60 seconds to free-write on the next screen.
          <br />
          The countdown will begin when you start typing.
          <br />
          When the timer runs out you will no longer be able to type.
          <br />
          <span className="last-line">Have Fun!</span>
        </p>
        <button>Start Story</button>
      </>
    );
  }

  render() {
    return (
      <form
        className="StorySetup"
        onSubmit={(event) => {
          this.props.startWriting(event, this.state.desiredGenre);
        }}
      >
        {this.props.userName && (
          <>
            <p className='first-line'><span className='first-letter'>H</span>ello {this.props.userName},</p>
          </>
        )}
        {this.promptCheckBox(this.state.promptRequested)}
        {this.state.promptRequested && (
          <>
            <label>
              Please select a genre:
              {this.genreDropDown(this.props.prompts)}
            </label>
            {this.props.randomPrompt && (
              <span className="prompt">
                PROMPT: <br/> {this.props.randomPrompt.prompt}
                <br />
              </span>
            )}
            <button
              className="refresh-prompt"
              type="button"
              onClick={() => {
                this.props.getRandomPrompt(this.state.desiredGenre);
              }}
            >
              / Refresh Prompt /
            </button>
          </>
        )}
        {this.rulesOfTheGame()}
      </form>
    );
  }
}

export default StorySetup