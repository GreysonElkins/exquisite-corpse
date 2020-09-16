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
    
    expect(screen.getByRole('close-pop-up')).toBeInTheDocument()
    expect(screen.getByText('le cadavre exquis boira le vin nouveau.', { exact: false })).toBeInTheDocument()
    expect(screen.getByText(/1929/i)).toBeInTheDocument()
    expect(screen.getByText(/1929/i)).toBeInTheDocument()
    expect(screen.getByText(/1929/i)).toBeInTheDocument()
    expect(screen.getByText(/1929/i)).toBeInTheDocument()
    expect(screen.getByText(/1929/i)).toBeInTheDocument()
    expect(screen.getByText(/1929/i)).toBeInTheDocument()
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