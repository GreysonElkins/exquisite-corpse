import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import moment from 'moment'
import "@testing-library/jest-dom"
import Book from "./Book"
import testData from '../../assets/testData/testData'

describe('Book button', () => {
  let story, mockClick, book 

  beforeEach(() => {
    story = testData.stories[0]
    mockClick = jest.fn()
    render(<Book story={story} onClick={mockClick}/>)
    book = screen.getByRole('button')
  })

  it('should render a button', () => {
    expect(book).toBeInTheDocument()
  })

  it('should display the title of the story on the button', () => {
    const title = screen.getByText('Greyson has a good morning')
    expect(title).toBeInTheDocument()
  })

  it('should display the date the story was last updated', () => {
    const expectedText = moment(story.updated_at).format('MMM YYYY')
    const date = screen.getByText(expectedText)
    expect(date).toBeInTheDocument()
  })

  it(`should fire a function with it's story when clicked`, () => {
    fireEvent.click(book)
    expect(mockClick).toHaveBeenCalledTimes(1)
    expect(mockClick).toHaveBeenCalledWith(story)
  })
})
