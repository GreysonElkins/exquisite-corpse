import React from 'react'
import Book from './Book'
import './Bookshelf.scss'

const Bookshelf = (props) => {
  const booksSelection = props.stories.map((story, i) => {
    
    return (
      <Book story={story} key={i}/>
    )
  })
    
  return (
    <section>
      <span className="bookContainer">
        {booksSelection}
      </span>
    </section>
  )
}

export default Bookshelf