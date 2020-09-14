import React, { Component } from 'react'
import StorySetup from '../StorySetup/StorySetup'
import './StorySetupView.css'

class StorySetupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      prompt: "",
      genre: ""
    };
  }

  setGenre = (genre) => {
    this.setState({ genre: genre });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let prompt;

    if (this.state.promptRequested) {
      const genre = this.state.genre;
      prompt = await ApiHelper.getRandomPrompt(genre);
    }

    if (!this.props.error) {
      this.setState({
        prompt: prompt,
        submitOk: true,
      });
    }
  };

  render() {
    return (
      <section className="StorySetupView">
        {this.state.error && (
          <h2>
            I'm sorry, we could not retrieve a prompt. Error Status:{" "}
            {this.state.error}
          </h2>
        )}
        <StorySetup
          userName={"Bango Zango" /*this.props.username*/}
          setPrompt={this.setPrompt}
          setGenre={this.setGenre}
          handleSubmit={this.handleSubmit}
          prompt={this.state.prompt}
          error={this.state.error}
        />
      </section>
    );
  }
}

export default StorySetupView;