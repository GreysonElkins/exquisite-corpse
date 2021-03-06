import React from 'react'
import moment from 'moment'
import './PublishedStory.scss'
import PropTypes from 'prop-types'

const PublishedStory = ({ currentStory }) => {  

  const buildStory = (story = []) => {
    return story.map((section, i) => {
      return (
        <p key={`paragraph${i}`}>{section}</p>
      )
    })
  }

  const presentAuthors = (authors) => {
    const authorCount = authors.length
    const accountedAuthors = []
    return authors.reduce((list, author, i) => {
      if(accountedAuthors.includes(author.name)) return list
      if (i + 1 === authorCount && authorCount !== 1) {
        list += ` and ${author.name}`
      } else if (i === 0) {
        list += author.name
      } else {
        list += `, ${author.name}`
      }
      accountedAuthors.push(author.name)
      return list
    }, 'By ')
  }

  return (
    <article>
      <header>
        <h2 className='story-title'>{currentStory.title}</h2>
        <h3 className='date-genre'>
          {moment(currentStory.updated_at).format('MMMM DD, YYYY')} 
          <br /> 
          {currentStory.prompt && `Genre: ${currentStory.prompt.genre}`}
        </h3>
        <h4 className='contributors'>{presentAuthors(currentStory.contributors)}</h4>
      </header>
      <section className='story-body'>
        {buildStory(currentStory.contributions)}
      </section>
    </article>
  )
}

PublishedStory.propTypes = {
  currentStory: PropTypes.object
}

export default PublishedStory