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

  it("should ask if a user would like a prompt", () => {
    const getPrompts = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <StorySetup
          userName={"Bango Zango"}
          getPrompts={getPrompts}
          prompt={""}
          error={false}
        />
      </MemoryRouter>
    );

    const promptPrompt = getByText(/start with a prompt\?/i);
    expect(promptPrompt).toBeInTheDocument();
  });

  it("should show the genre dropdown menu when the checkbox is selected", () => {
    const getPrompts = jest.fn();

    const { getByRole, getByText } = render(
      <MemoryRouter>
        <StorySetup
          userName={"Bango Zango"}
          getPrompts={getPrompts}
          prompt={""}
          error={false}
        />
      </MemoryRouter>
    );

    const checkbox = getByRole("checkbox", {
      name: /would you like to start with a prompt\? check box for "yes" \-/i,
    });
    fireEvent.click(checkbox);

    const dropDownLabel = getByText(/please select a genre:/i);
    const dropDownMenu = getByRole("combobox");
    expect(dropDownLabel).toBeInTheDocument();
    expect(dropDownMenu).toBeInTheDocument();
  });

  
})