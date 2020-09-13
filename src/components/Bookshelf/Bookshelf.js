import React from 'react'
import Book from './Book'
import './Bookshelf.scss'

const Bookshelf = ({ stories, onClick, popup }) => {

  const booksSelection = stories.map((story, i) => {
    return (
      <Book story={story} onClick={onClick} popup={popup} key={i}/>
    )
  })
    
  return (
    <section className="bookContainer">
      {booksSelection}
    </section>
  )
}

export default Bookshelf