import React from 'react'
import Instructions from './Instructions'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import testData from "../../assets/testData/testData"

describe('Instructions', () => {

  it('Should have the correct content when rendered', () => {
    let stories = testData.stories
    render(
      <MemoryRouter>
        <Instructions 
          stories={stories}
        />
      </MemoryRouter>
    )

    expect(screen.getAllByRole('button')).toHaveLength(6)
    expect(screen.getByRole('heading', { name: 'R ules of Play' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Continue a story:' })).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByRole('button', {name: '☞ History of Exquisite Corpse' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '☞ Start a new story' })).toBeInTheDocument()
    expect(screen.getByText('xquisite Corpse is a collaborative', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Begin a new story', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Start your section', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Be creative and write fast', { exact: false })).toBeInTheDocument()
  })

  it('Should fire method when button is clicked and change state', () => {
    const mockFun = jest.fn()
    let stories = testData.stories

    const { getByRole } = render(
      <MemoryRouter>
        <Instructions 
          displayHistory={mockFun}
          stories={stories}
          showHistory={false}
        />
      </MemoryRouter>
    )

    fireEvent.click(getByRole('button', { name: '☞ History of Exquisite Corpse' }))

    expect(mockFun).toHaveBeenCalledTimes(1)

    render(
      <MemoryRouter>
        <Instructions 
          displayHistory={mockFun}
          stories={stories}
          showHistory={true}
        />
      </MemoryRouter>
    )
  })

  it('Should render history when state changes', () => {
    let stories = testData.stories

    render(
      <MemoryRouter>
        <Instructions 
          stories={stories}
          showHistory={true}
        />
      </MemoryRouter>
    )

    const hiddenHistory = screen.getByText('Exquisite Corpse, also known', { exact: false })

    expect(hiddenHistory).toBeInTheDocument()

  })
})