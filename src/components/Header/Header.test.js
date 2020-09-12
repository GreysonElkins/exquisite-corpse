import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Header from './Header'

describe('Header', () => {

  it('should display the title of the application', () => {
    const { getByRole } = render (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const title = getByRole('heading', { name: /exquisite corpse/i })
    expect(title).toBeInTheDocument()
  })

  it('should display the navigation buttons', () => {
    const { getByRole } = render (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const newStory = getByRole('button', { name: /new story/i })
    const library = getByRole('button', { name: /library/i })
    const signIn = getByRole('button', { name: /sign in/i })

    expect(newStory).toBeInTheDocument()
    expect(library).toBeInTheDocument()
    expect(signIn).toBeInTheDocument()
  })
})
