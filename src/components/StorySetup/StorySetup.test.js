import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import StorySetup from './StorySetup'

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

  it('should ask if a user would like a prompt', () => {
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

    const promptPrompt = getByText(/start with a prompt\?/i)
    expect(promptPrompt).toBeInTheDocument()
  })

  // it('should show the genre dropdown menu when the checkbox is selected', () => {
  //   const getPrompts = jest.fn()

  //   const { getByRole, getByText } = render(
  //     <MemoryRouter>
  //       <StorySetup
  //         userName={'Bango Zango'}
  //         getPrompts={getPrompts}
  //         prompt={''}
  //         error={false}
  //       />
  //     </MemoryRouter>
  //   )

  //   const checkbox = getByRole('checkbox', {
  //     name: /would you like to start with a prompt\? check box for "yes" \-/i,
  //   })
  //   fireEvent.click(checkbox)

  //   const dropDownLabel = getByText(/please select a genre:/i)
  //   const dropDownMenu = getByRole('combobox')
  //   expect(dropDownLabel).toBeInTheDocument()
  //   expect(dropDownMenu).toBeInTheDocument()
  // })

  it.skip('should fire handleChange when a genre is selected', () => {
    // This has been skipped because there is no way to assert that the handleChange method was called, and no other visible change that we could figure out to test.
    const getPrompts = jest.fn();
    const handleChange = jest.fn();

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

    const dropDownMenu = getByRole("combobox");
    fireEvent.click(dropDownMenu);
    fireEvent.keyDown(dropDownMenu, { key: "ArrowDown", code: "ArrowDown" });
    fireEvent.keyDown(dropDownMenu, { key: "Enter", code: "Enter" });

    expect(handleChange).toHaveBeenCalledTimes(1);
  })

  it('should display a button to start the story', () => {
    const getPrompts = jest.fn()

    const { getByRole } = render(
      <MemoryRouter>
        <StorySetup
          userName={'Bango Zango'}
          getPrompts={getPrompts}
          prompt={''}
          error={false}
        />
      </MemoryRouter>
    )

    const startStoryButton = getByRole('button', { name: /start story/i })
    expect(startStoryButton).toBeInTheDocument()
  })
})