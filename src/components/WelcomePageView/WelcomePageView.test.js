import React from 'react'
import WelcomePageView from './WelcomePageView'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('WelcomePageView', () => {
  it('Should have the correct content when rendered', () => {
    render(
      <MemoryRouter>
        <WelcomePageView />
      </MemoryRouter>
    )
    
    const heading = screen.getByText('Rules of Play')
    const bulletPoint = screen.getByText('Exquisite Corpse is a collaborative', { exact: false })
    const instrOne = screen.getByText('Select a new prompt', { exact: false })
    const instrTwo = screen.getByText('Start your section', { exact: false })
    const instrThree = screen.getByText('Be creative and write fast', { exact: false })
    
    expect(heading).toBeInTheDocument()
    expect(bulletPoint).toBeInTheDocument()
    expect(instrOne).toBeInTheDocument()
    expect(instrTwo).toBeInTheDocument()
    expect(instrThree).toBeInTheDocument() 
  })
})
