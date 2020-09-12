import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditFields from './StoryEditFields'
import '@testing-library/jest-dom'

describe('StoryEditFields', () => {
  it('should render a header and two input fields', () => {
    render(
      <Router>
        <StoryEditFields />
      </Router>
    )

    const header = screen.getByText(/prompt placeholder/i)
    const titleInputField = screen.getByPlaceholderText(/enter your title here/i)
    const storyInputField = screen.getByPlaceholderText(/type your story here/i)

    expect(header).toBeInTheDocument()
    expect(titleInputField).toBeInTheDocument()
    expect(storyInputField).toBeInTheDocument()
  })
})