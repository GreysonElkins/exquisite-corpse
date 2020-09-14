import React, { Component } from 'react'
import moment from 'moment'
import ApiHelper from '../../ApiHelper/ApiHelper'
import './PublishedStory.css'

class PublishedStory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: []
    }
  }
  
  componentDidMount() {
    this.setState( { authors: [] })
    this.props.currentStory.contributors.map(async author => {
      const foundAuthors = this.state.authors
      await ApiHelper.getData('authors', author).then((foundAuthor) => {
        console.log(foundAuthor)
        foundAuthors.push(foundAuthor)
        this.setState({ authors: foundAuthors })
      })
    })
  }
    
  buildStory = (story = []) => {
    return story.map((section, i) => {
      return (
        <p key={`paragraph${i}`}>{section}</p>
      )
    })
  }

  presentAuthors(authors) {
    //this function will eventually need to account 
    //for multiples because REPEATS MUST BE maintained 
    //in state in order to coodernate between entries
    //and their respective users
    
    const authorCount = authors.length
    const accountedAuthors = []
    return authors.reduce((list, author, i) => {
      if(accountedAuthors.includes(author.name)) return list
      if (i + 1 === authorCount && authorCount !== 1) {
        list += ` and ${author.name}`
      } else if (i === 0) {
        list += author.name
      } else {
        list += `, ${author.name}`
      }
      accountedAuthors.push(author.name)
      return list
    }, 'By ')
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
          <h3>{
          this.presentAuthors(this.state.authors)
          }</h3>
        </header>
        <section>
          {this.buildStory(this.props.currentStory.contributions)}
        </section>
      </article>

    )
  }
}

export default PublishedStory