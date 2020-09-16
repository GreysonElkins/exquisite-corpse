import React from 'react'
import StorySetupView from './StorySetupView'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import testData from "../../assets/testData/testData"
describe('Instructions', () => {

    it('Should have the correct content when rendered', () => {
      const currentUser = {
          id: 2,
          name: 'Bob',
          email: 'bob@bob.com',
          bio: 'My name is bob and I do bob things',
          createdAt: '5/3/2020',
          updatedAt: '6/6/2020'
      }
      render(
        <MemoryRouter>
          <StorySetupView
            currentUser={currentUser}
          />
        </MemoryRouter>
      )
  
      expect(screen.getByRole('button', { name: '/ Start Story /'})).toBeInTheDocument()
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
      expect(screen.getByText('You will have 60 seconds', { exact: false })).toBeInTheDocument()
    })
  })