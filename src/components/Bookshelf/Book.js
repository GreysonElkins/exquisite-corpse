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

const Book = ({ story, onClick, popup }) => {
  const spine = getBookSpine()
  let prompt = story.contributions.slice(-1)
  return (
    <>
      <div 
        data-tip data-for='global'
        className="book" 
        style={{ backgroundImage: `url(${spine})` }}
        role="button"
        onClick={() => {
          onClick(story)
        }}
      >
        <span className="title">{story.title}</span>
        <span className="prompt">{story.prompt}</span>
        <span className="date-published">
          {moment(story.updated_at).format("MMM YYYY")}
        </span>
      </div>
      {popup && 
        <ReactTooltip id='global' className="pop-up" place='top' effect='float' >
          <p className='blurred-text'>This is the blurred prompt for the popup,<br></br>
          the user will not be able to see this, <br></br>
          They will only be able to see the very last part<br></br>
          consectetur adipiscing elit, sed do eiusmod <br></br>
          tempor incididunt ut labore et dolore magna <br></br>
          aliqua. Ut enim ad minim veniam, quis nostrud<br></br>
          exercitation ullamco laboris nisi ut aliquip ex <br></br>
          ea commodo consequat. Duis aute irure dolor in <br></br>
          reprehenderit in voluptate aboris nisi ut</p>
          <p>{prompt}...</p>
        </ReactTooltip>
      }
    </>
  );
}

export default Book