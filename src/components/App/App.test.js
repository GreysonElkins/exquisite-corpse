import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import App from './App';

describe("App", () => {

  beforeEach( () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('Should render header on load', () => {
    expect(screen.getByRole('heading', { name: 'E xquisite C orpse' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Parchment Manuscript paper' })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'R ules of Play' }))
    expect(screen.getByRole('heading', { name: 'Continue a story:' }))
    expect(screen.getByRole('heading', { name: 'OR' }))
    expect(screen.getByRole('link', { name: 'E xquisite C orpse' }))
    expect(screen.getByRole('link', { name: '/ New Story /' }))
    expect(screen.getByRole('link', { name: '/ Library /' }))
    expect(screen.getByRole('link', { name: '/ Sign In /' }))
    expect(screen.getByRole('button', { name: '☞ History of Exquisite Corpse' }))
  })
})
