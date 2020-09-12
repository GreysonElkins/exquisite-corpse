import React from 'react'
import Book from './Book'
import './Bookshelf.scss'

const Bookshelf = ({ stories, onClick }) => {

  const booksSelection = stories.map((story, i) => {
    return (
      <Book story={story} onClick={onClick} key={i}/>
    )
  })
    
  return (
    <section className="bookContainer">
      {booksSelection}
    </section>
  )
}

export default Bookshelf