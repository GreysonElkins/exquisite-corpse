import React from 'react'
import WelcomePageView from './WelcomePageView'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import ApiHelper from '../../ApiHelpers/apiCalls'
jest.mock('../../ApiHelpers/apiCalls')

describe('WelcomePageView', () => {
  it('Should have the correct content when rendered', () => {
    render(
      <MemoryRouter>
        <WelcomePageView />
      </MemoryRouter>
    )
    
    const heading = screen.getByText('Rules of Play')

    expect(heading).toBeInTheDocument()
  })
})
