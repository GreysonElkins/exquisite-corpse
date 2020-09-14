import React, { Component } from 'react'
import Book from './Book'
import './Bookshelf.scss'

class Bookshelf extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
  }

  booksSelection = () => {
    return this.props.stories.map((story, i) => {
      return (
        <Book 
          story={story} 
          onClick={() => this.props.onClick(story)} 
          popup={this.props.popup} key={i}/>
      )
    })
  }
  render() {
    return (
      <section className="bookContainer">
        {this.booksSelection}
      </section>
    )
  }
}

export default Bookshelf