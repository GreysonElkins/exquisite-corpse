import React from 'react'
import { Link } from "react-router-dom";
import moment from 'moment'
import './Bookshelf.scss'
import book1 from "../../assets/bookspine1.png";
import book2 from "../../assets/bookspine2.png";
import book3 from "../../assets/bookspine3.png";
import book4 from "../../assets/bookspine4.png";
import book5 from "../../assets/bookspine5.png";
import book6 from "../../assets/bookspine6.png";
import book7 from "../../assets/bookspine7.png";


const bookSpines = [book1, book2, book3, book4, book5, book6, book7]

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
      className="book-link"
    >
      <span className='book' style={{backgroundImage: `url(${spine})`}}>
        <div className="title">{story.title}</div>
        <div className="prompt">{story.prompt}</div>
        <div className="date-published">{
          moment(story.updated_at).format('MMM YYYY')
        }</div>
      </span>
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