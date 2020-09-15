import React from "react";
import {screen, render, fireEvent} from "@testing-library/react";
import Bookshelf from "./Bookshelf";
import testData from '../../assets/testData/testData'

describe('Bookshelf component', () => {
  let stories, mockClick

  beforeEach(() => {
    stories = testData.stories
    console.log('stories', stories)
    mockClick = jest.fn()
    render(<Bookshelf stories={stories} onClick={mockClick}/>)
  })

  it('should render a button for each story', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
  })

  it('should pass story info to each book to be rendered', () => {
    const title = screen.getByRole('heading', { name: 'Birdhouse in Your Soul'})
    expect(title).toBeInTheDocument()
  })
  
  it('should pass an onClick function to books', () => {
    const title = screen.getByRole('Birdhouse in Your Soul')
    fireEvent.click(title)
    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})

