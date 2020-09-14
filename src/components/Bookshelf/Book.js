import React from "react"
import moment from "moment"
import "./Bookshelf.scss"
import ReactTooltip from 'react-tooltip';

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

const findLastWords = (story) => {
  const lastEntry = story.contributions[story.contributions.length - 1]
  return `. . . ${lastEntry.substring(5)}`
} 

const Book = ({ story, onClick, popup, authorUpdater }) => {
  const spine = getBookSpine()
  return (
    <>
      <div 
        data-tip data-for='global'
        className="book" 
        style={{ backgroundImage: `url(${spine})` }}
        role="button"
        onClick={() => {
          authorUpdater(story)
          onClick(story)
        }}
      >
      </div>
        <ReactTooltip 
          id='global' 
          className="pop-up" 
          place='top' 
          effect='float' 
          >
          <p>
            TITLE: {story.title} <br />
            LAST WORDS: {findLastWords(story)} <br />
            {story.prompt && `GENRE: ${story.prompt.genre}`} <br />
            LAST UPDATED: {moment(story.updated_at).format("MMMM DD, YYYY")}
          </p>
        </ReactTooltip>
    </>
  );
}

export default Book