import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditView from './StoryEditView'
import ApiHelper from '../../ApiHelpers/ApiHelpers'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
jest.mock('../../ApiHelpers/ApiHelpers.js')

describe('StoryEditView', () => {
  it('should display a prompt', () => {
    render(
      <Router>
        <StoryEditView />
      </Router> 
    )

    const promptPlaceholder = screen.getByText('Prompt placeholder')

    expect(promptPlaceholder).toBeInTheDocument()
  })

  it('should display a form to enter and submit a story', () => {
    render(
      <Router>
        <StoryEditView />
      </Router>
    )

    const titleInput = screen.getByPlaceholderText('Enter your title here')
    const storyInput = screen.getByPlaceholderText('Type your story here')
    const submitButton = screen.getByRole('button', {name: 'Pass it on'})

    expect(titleInput).toBeInTheDocument()
    expect(storyInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})