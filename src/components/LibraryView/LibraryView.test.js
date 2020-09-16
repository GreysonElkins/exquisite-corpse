import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import LibraryView from "./LibraryView"
import testData from "../../assets/testData/testData"
import ApiHelper from '../../ApiHelper/ApiHelper'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('LibraryView', () => {
  
  it('should render a book button for every COMPLETED story', () => {
    const authors = testData.authors
    const mockFun = jest.fn()
    render(
      <MemoryRouter>
        <LibraryView 
          stories={testData.stories}
          authorUpdater={mockFun}
          toggleHover={mockFun} 
          authors={authors}
        />
      </MemoryRouter>
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
  })
})