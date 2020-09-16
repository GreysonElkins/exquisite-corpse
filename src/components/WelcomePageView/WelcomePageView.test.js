import React from 'react'
import WelcomePageView from './WelcomePageView'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import testData from "../../assets/testData/testData";
import '@testing-library/jest-dom'

describe('WelcomePageView', () => {

  it('Should have the correct content when rendered', () => {
    const stories = testData.stories
    render(
      <MemoryRouter>
        <WelcomePageView 
          stories={stories}
        />
      </MemoryRouter>
    )

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
    expect(screen.getAllByRole('button')).toHaveLength(6)
  })
})
