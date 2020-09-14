import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ApiHelper from '../../ApiHelper/ApiHelper'
import './StorySetup.css'

class StorySetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authorName: '',
      promptRequested: false,
      genre: 'any',
      submitOk: false,
      prompt: ''
    }
  }
  
  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let prompt

    if (this.state.promptRequested) {
      const genre = this.state.genre
      prompt = await ApiHelper.getRandomPrompt(genre)
    }

    if(!this.props.error) {
      this.setState({
        prompt: prompt,
        submitOk: true
      })
    }
  }
  
  render() {
    if (this.state.submitOk) {
      return <Redirect to={{
          pathname: '/story-edit',
          state: { prompt: this.state.prompt }
        }}
      />
    }
    return (
      <form className='StorySetup' onSubmit={this.handleSubmit}>
        {!this.props.userName && 
        <label>
          Who Are You?<br/>
          <input
            name='authorName'
            type='text'
            placeholder='create your pen name'
            value={this.state.authorname}
            onChange={this.handleChange}
          />
        </label>
        }
        {this.props.userName && <p>Hello {this.props.userName},</p>}
        <br/>
        <label>
          Would you like to start with a prompt? <br/>
          Check box for <b><i>"Yes"</i></b> - 
          <input
            name='promptRequested'
            type='checkbox'
            checked={this.state.promptRequested}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        {this.state.promptRequested &&
        <label>
          Please select a genre:
          <select
            name='genre'
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option value='any'>Any</option>
            <option value='dystoptian'>Dystopian</option>
            <option value='fantasy'>Fantasy</option>
            <option value='horror'>Horror</option>
            <option value='mystery'>Mystery</option>
            <option value='romance'>Romance</option>
            <option value='science fiction'>Science Fiction</option>
            <option value='superhero'>Superhero</option>
          </select>
        </label>
        }
        <p>
          You will have 60 seconds to free-write on the next screen.<br/>
          {this.state.promptRequested && 
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
}

export default StorySetup