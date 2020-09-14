import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditFields from './StoryEditFields'
import '@testing-library/jest-dom'

describe('StoryEditFields', () => {
  it('should render at least two input fields', () => {
    render(
      <Router>
        <StoryEditFields />
      </Router>
    )
    const titleInputField = screen.getByPlaceholderText(/enter your title here/i)
    const storyInputField = screen.getByPlaceholderText(/type your story here/i)
    
    expect(titleInputField).toBeInTheDocument()
    expect(storyInputField).toBeInTheDocument()
  })

  it('should render a header if a prompt is passed in', () => {
    render(
      <Router>
        <StoryEditFields prompt={{prompt: 'This is a prompt'}} />
      </Router>
    )
    
    const header = screen.getByText(/this is a prompt/i)

    expect(header).toBeInTheDocument()
  })
})