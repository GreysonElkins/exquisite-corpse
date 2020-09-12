import React from 'react'
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import book6 from "../../assets/book6.jpg";
import book7 from "../../assets/book7.jpg";


const bookSpines = [
  <img src={book1} alt="A yellow leather-bound book spine" />,
  <img src={book2} alt="A red leather-bound book spine" />,
  <img src={book3} alt="A black leather-bound book spine" />,
  <img src={book4} alt="A brown leather-bound book spine" />,
  <img src={book6} alt="A purplish leather-bound book spine" />,
  <img src={book7} alt="A green leather-bound book spine" />
]

const getBookSpine = () => {
  const random = Math.floor(Math.random() * Math.floor(5));
  return bookSpines[random]
}

const Bookshelf = (props) => {

  const booksSelection = props.stories.map((story, i) => {
    return (
      <span class="bookContainer" key={`book${i}`}>
        {getBookSpine()}
      </span>
    )
  })

  return (
    <section>
      {booksSelection}
    </section>
  )
}

export default Bookshelf