import React, { Component } from 'react'
import moment from 'moment'
import ApiHelper from '../../ApiHelper/ApiHelper'
import './PublishedStory.css'

class PublishedStory extends Component {
  constructor(props) {
    super(props)
    this.story = this.buildStory(props.currentStory.story)
    this.state = {
      authors: []
    }
  }

  buildStory = (story = []) => {
    debugger
    // console.log(story)
    return story.map(section => {
      return (
        <p>{section}</p>
      )
    })
  }

  componentDidMount() {
    const foundAuthors = [];
    ApiHelper.getData().then(authors => {
      console.log(authors)
      // this will be fleshed out when getData and 
      // authors in the database are fleshed out
    })
  }

  render() {
    return (
      <article>
        <header>
          <h2>{this.props.currentStory.title}</h2>
          <h4>
            {moment(this.props.currentStory.updated_at).format('MMMM DD, YYYY')} 
            <br /> 
            Prompt: {this.props.currentStory.prompt}
          </h4>
          <h3>By {this.state.authors}</h3>
        </header>
        <section>
          {this.story}
        </section>
      </article>

    )
  }
}

export default PublishedStory