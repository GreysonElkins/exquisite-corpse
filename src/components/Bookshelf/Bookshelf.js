import React, { Component } from 'react'
import Book from './Book'
import './Bookshelf.scss'

class Bookshelf extends Component {

  componentDidMount = () => {
    // this.props.authorUpdater(this.props.stories)
  }

  booksSelection = () => {
    return this.props.stories.map((story, i) => {
      return (
        <Book 
          authorUpdater={this.props.authorUpdater}
          story={story} 
          onClick={() => this.props.onClick(story)} 
          popup={this.props.popup} key={i}/>
      )
    })
  }
  render() {
    return (
      <section className="bookContainer">
        {this.booksSelection()}
      </section>
    )
  }
}

export default Bookshelf