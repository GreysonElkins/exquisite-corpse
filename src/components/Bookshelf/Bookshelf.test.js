import React from "react";
import {screen, render, fireEvent} from "@testing-library/react";
import Bookshelf from "./Bookshelf";
import testData from '../../assets/testData/testData'

describe('Bookshelf component', () => {
  let stories, mockClick

  beforeEach(() => {
    stories = testData.stories
    mockClick = jest.fn()
  })

  it('Should render a story as a button', () => {
    render(
        <Bookshelf
          stories={stories}
          takeToWritingSection={mockClick}
        />
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
  })

  it(`Should fire a function with it's story when clicked`, () => {
    render(
        <Bookshelf
          stories={stories}
          takeToWritingSection={mockClick}
          authorUpdater={mockClick}
          onClick={mockClick}
          toggleHover={mockClick}
        />
    )
    const allButtons = screen.getAllByRole('button')
    const story = testData.stories[0]
    const book = allButtons[0]
    fireEvent.click(book)
    expect(mockClick).toHaveBeenCalledTimes(3)
    expect(mockClick).toHaveBeenCalledWith(story)
  })
})

