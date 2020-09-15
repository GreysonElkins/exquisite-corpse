import React from "react"
import moment from "moment"
import "./Bookshelf.scss"

import book1 from "../../assets/bookspine1.png";
import book2 from "../../assets/bookspine2.png";
import book3 from "../../assets/bookspine3.png";
import book4 from "../../assets/bookspine4.png";
import book5 from "../../assets/bookspine5.png";
import book6 from "../../assets/bookspine6.png";
import book7 from "../../assets/bookspine7.png";

const bookSpines = [book1, book2, book3, book4, book5, book6, book7];

const getBookSpine = () => {
  const random = Math.floor(Math.random() * 6);
  return bookSpines[random];
};


const Book = ({ story, onClick, popup, authorUpdater, toggleHover }) => {
  const hoverObject = {
    show: true,
    title: story.title,
    prompt: story.prompt,
    lastWords: story.lastWords,
    lastUpdate: moment(story.updated_at).format("MMMM DD, YYYY")
  }
  const spine = getBookSpine()
  return (
    <div 
      data-tip data-for='global'
      className="book" 
      style={{ backgroundImage: `url(${spine})` }}
      role="button"
      onMouseEnter={(event) => {
        toggleHover(event, hoverObject)
      }}
      onMouseLeave={toggleHover}
      onClick={() => {
        authorUpdater(story)
        onClick(story)
      }}
    >
    </div>
  );
}

export default Book