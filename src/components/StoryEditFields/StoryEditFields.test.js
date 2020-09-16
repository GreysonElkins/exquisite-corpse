import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditFields from './StoryEditFields'
import '@testing-library/jest-dom'

describe('StoryEditFields', () => {
  it('Should render prompt and a input box and title for new story', () => {
    const story = {
      id: 1,
      title: "",
      contributions: [
        "He sleeps until 9:30, wow!",
        "He makes himself coffee, yes!",
        "He feels well rested and equipped to write tests, yes!",
      ],
      prompt: "journal",
      created_at: "2020-09-10T22:37:51.103Z",
      updated_at: "2020-09-10T22:37:51.103Z",
      is_complete: true,
    }

    render(
      <Router>
        <StoryEditFields 
          story={story}
        />
      </Router>
    )
    
    expect(screen.getByRole('heading', { name: /PROMPT:/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Type your story here/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your title here/i)).toBeInTheDocument()
  })

  it('Should render last words and input if not a new story', () => {
    const story = {
      id: 1,
      title: "",
      lastWords: "Last words",
      contributions: [
        "He sleeps until 9:30, wow!",
        "He makes himself coffee, yes!",
        "He feels well rested and equipped to write tests, yes!",
      ],
      prompt: "",
      created_at: "2020-09-10T22:37:51.103Z",
      updated_at: "2020-09-10T22:37:51.103Z",
      is_complete: true,
    }
    
    render(
      <Router>
        <StoryEditFields 
          story={story}
        />
      </Router>
    )
    
    expect(screen.getByRole('heading', { name: /LAST WORDS: Last words/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Type your story here/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your title here/i)).toBeInTheDocument()
  })
})