import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import StorySetup from "./StorySetup";

describe('StorySetup', () => {
  
  it('should have an input for authorname, and a button to submit', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <StorySetup />
      </MemoryRouter>
    )

    const authornameInput = getByRole()
  })
})