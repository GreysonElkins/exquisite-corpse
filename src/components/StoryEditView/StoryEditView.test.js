import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditView from './StoryEditView'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('StoryEditView', () => {
  it('should display a prompt', () => {
    render(
      <Router>
        <StoryEditView />
      </Router> 
    )

    const promptPlaceholder = screen.getByText('Prompt placeholder')

    expect(promptPlaceholder).toBeInTheDocument();
  })
})