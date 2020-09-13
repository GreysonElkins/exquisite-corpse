import React from 'react'
import GameHistory from './GameHistory'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('GameHistory', () => {
  it('Should have the correct content when rendered', () => {
    render(
      <MemoryRouter>
        <GameHistory />
      </MemoryRouter>
    )
    
    const button = screen.getByRole('close-pop-up')
    const text = screen.getByText('le cadavre exquis boira le vin nouveau.', { exact: false })
    const date1 = screen.getByText(/1929/i)
    const date2 = screen.getByText(/1929/i)
    const date3 = screen.getByText(/1929/i)
    const date4 = screen.getByText(/1929/i)
    const date5 = screen.getByText(/1929/i)
    const date6 = screen.getByText(/1929/i)

    expect(button).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(date1).toBeInTheDocument()
    expect(date2).toBeInTheDocument()
    expect(date3).toBeInTheDocument()
    expect(date4).toBeInTheDocument()
    expect(date5).toBeInTheDocument()
    expect(date6).toBeInTheDocument()
  })

  it('Should fire a method when the close button is clicked', () => {
    const mockFun = jest.fn()

    render(
      <MemoryRouter>
        <GameHistory 
          displayHistory={mockFun}
        />
      </MemoryRouter>
    )

    const button = screen.getByRole('close-pop-up')

    fireEvent.click(button)

    expect(mockFun).toHaveBeenCalledTimes(1)
  })
})