import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditView from './StoryEditView'
import ApiHelper from '../../ApiHelpers/ApiHelpers'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
jest.mock('../../ApiHelpers/ApiHelpers.js')

describe('StoryEditView', () => {
  it('should display a header, a form, a timer and at least one button', () => {
    const state = 'He asks, who watched over you?'
    render(
      <Router>
        <StoryEditView 
          location={state}
        />
      </Router>
    )

    const promptHeader = screen.getByRole('heading')
    const titleInput = screen.getByPlaceholderText(/Enter your title here/i)
    const storyInput = screen.getByPlaceholderText(/Type your story here/i)
    const timer = screen.getByText(/59/i)
    const submitButton = screen.getByRole('button')

    expect(promptHeader).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
    expect(storyInput).toBeInTheDocument()
    expect(timer).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})