import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Header from './Header'

describe('Header', () => {

  it('should display the title of the application', () => {
    let currentUser = {
      id: 3,
      name: 'j',
      email: 'l',
      bio: "hsofhs",
      created_at: 'oq',
      updated_at: '3'
    }
    const { getByRole } = render (
      <MemoryRouter>
        <Header 
           currentUser={currentUser}
        />
      </MemoryRouter>
    )

    const title = getByRole('heading', { name: /E xquisite C orpse/i })
    expect(title).toBeInTheDocument()
  })

  it('should display the navigation buttons', () => {
    let currentUser = {
      id: 3,
      name: 'j',
      email: 'l',
      bio: "hsofhs",
      created_at: 'oq',
      updated_at: '3'
    }
    const { getByRole } = render (
      <MemoryRouter>
        <Header 
           currentUser={currentUser}
        />
      </MemoryRouter>
    )

    const newStory = getByRole('link', { name: '/ Home /' })
    const library = getByRole('link', { name: '/ Library /' })
    const signIn = getByRole('link', { name: '/ Sign Out /' })

    expect(newStory).toBeInTheDocument()
    expect(library).toBeInTheDocument()
    expect(signIn).toBeInTheDocument()
  })
})
