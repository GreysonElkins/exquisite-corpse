import React from 'react'
import Book from './Book'
import './Bookshelf.scss'
import PropTypes from 'prop-types'

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

Bookshelf.propTypes = {
  authorUpdater: PropTypes.func,
  onClick: PropTypes.func,
  stories: PropTypes.array,
  toggleHover: PropTypes.func
}

export default Bookshelf