import React from "react"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Book from "./Book"
import testData from '../../assets/testData/testData'

describe('Book button', () => {
  let story, mockClick, book

  beforeEach(() => {
    story = testData.stories[0]
    mockClick = jest.fn()
  })

  it('Should render a button', () => {
    render(
        <Book
          takeToWritingSection={mockClick}
          story={story}
        />
    )
    book = screen.getByRole('button')
    expect(book).toBeInTheDocument()
  })
})
