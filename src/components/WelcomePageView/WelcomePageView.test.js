import React from 'react'
import WelcomePageView from './WelcomePageView'
import { fireEvent, render, screen } from '@testing-library/react'
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
    const button = screen.getByRole('button', {name: ''})
    const bulletPoint = screen.getByText('Exquisite Corpse is a collaborative', { exact: false })
    const instrOne = screen.getByText('Select a new prompt', { exact: false })
    const instrTwo = screen.getByText('Start your section', { exact: false })
    const instrThree = screen.getByText('Be creative and write fast', { exact: false })
    
    expect(heading).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(bulletPoint).toBeInTheDocument()
    expect(instrOne).toBeInTheDocument()
    expect(instrTwo).toBeInTheDocument()
    expect(instrThree).toBeInTheDocument()
  })

  it('Should fire method when button is clicked', () => {
    const mockFun = jest.fn()

    const { getByRole } = render(
      <MemoryRouter>
        <WelcomePageView onClick={mockFun} />
      </MemoryRouter>
      )

    fireEvent.click(getByRole('button'))

    expect(mockFun).toHaveBeenCalledTimes(0)
  })

  it('Should render history when state changes', () => {
    render(
      <MemoryRouter>
        <WelcomePageView 
         showHistory={true}
        />
      </MemoryRouter>
    )

    const hiddenHistory = screen.getByText('Exquisite Corpse, also known', { exact: false })

    expect(hiddenHistory).toBeInTheDocument()

  })
})
