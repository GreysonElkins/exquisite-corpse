import React from 'react'
import { Link } from "react-router-dom";
import './Bookshelf.css'
import book1 from "../../assets/bookspine1.png";
import book2 from "../../assets/bookspine2.png";
import book3 from "../../assets/bookspine3.png";
import book4 from "../../assets/bookspine4.png";
import book5 from "../../assets/bookspine5.png";
import book6 from "../../assets/bookspine6.png";
import book7 from "../../assets/bookspine7.png";


const bookSpines = [
  {book: book1, color: 'yellow'},
  {book: book2, color: 'red'},
  {book: book3, color: 'black'},
  {book: book4, color: 'green'},
  {book: book5, color: 'brown'},
  {book: book6, color: 'navy'},
  {book: book7, color: 'purplish'}
]

const getBookSpine = () => {
  const random = Math.floor(Math.random() * Math.floor(5));
  return bookSpines[random]
}

const Bookshelf = (props) => {
  const booksSelection = props.stories.map((story, i) => {
    const spine = getBookSpine(i)
    return (
    <Link 
      to={story.isComplete ? `/published-story/${story.id}` : `/story-edit/${story.id}`}
      key={`book${i}`}
      className='book'
    >
      <img src={spine.book} alt={`A ${spine.color} leather-bound book spine`} />
    </Link>
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