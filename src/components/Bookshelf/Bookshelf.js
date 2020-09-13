import React from 'react'
import Book from './Book'
import './Bookshelf.scss'

const Bookshelf = ({ stories, onClick, currentPage }) => {

  const booksSelection = stories.map((story, i) => {
    return (
      <Book story={story} onClick={onClick} currentPage={currentPage} key={i}/>
    )
  })
    
  return (
    <section className="bookContainer">
      {booksSelection}
    </section>
  )
}

export default Bookshelf