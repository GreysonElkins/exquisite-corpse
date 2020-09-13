import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import StorySetup from './StorySetup';

describe('StorySetup', () => {
  
  it('should display the author\'s name', () => {
    const getPrompts = jest.fn()
    
    const { getByText } = render(
      <MemoryRouter>
        <StorySetup 
          userName={'Bango Zango'}
          getPrompts={getPrompts}
          prompt={''}
          error={false}
        />
      </MemoryRouter>
    )

    const authorname = getByText(/bango zango/i)
    expect(authorname).toBeInTheDocument()
  })

  
})