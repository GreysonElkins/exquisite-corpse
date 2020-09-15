import React from 'react'
import Book from './Book'
import './Bookshelf.scss'

const Bookshelf = (props) => {

  const booksSelection = (props) => {
    return props.stories.map((story, i) => {
      return (
        <Book 
          authorUpdater={props.authorUpdater}
          story={story} 
          onClick={() => props.onClick(story)} 
          popup={props.popup} 
          toggleHover={props.toggleHover}
          key={i}
        />
      )
    })
  }

    return (
      <section className="bookContainer">
        {booksSelection(props)}
      </section>
    )

}

export default Bookshelf