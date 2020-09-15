import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import moment from 'moment'
import PublishedStory from "./PublishedStory";
import testData from "../../assets/testData/testData";
import ApiHelper from "../../ApiHelper/ApiHelper";

jest.mock('../../ApiHelper/ApiHelper.js')

describe('PublishedStory component', () => {

  beforeEach(() => {
    render(<PublishedStory 
      currentStory={testData.stories[2]} 
      currentAuthors={testData.authors}/>)
  })

  it('should render details about the story', () => {
    const title = screen.getByRole('heading', { name: 'Birdhouse in Your Soul'})
    const prompt = screen.getByRole('heading', { name: /sci-fi/i})
    const date = screen.getByRole(
      'heading',
      { name: /October 10, 2020/i
      })
    const line1 = screen.getByText(
      'Blue canary in the outlet by the lightswitch.'
    );
    const lastLine = screen.getByText(
      "Say I'm the only bee in your bonnet."
    )
    const authors = screen.getByText(
      /By Bubs, Sauchy LaHavas and There's a bird in here/i
    )
    
    expect(title).toBeInTheDocument()
    expect(prompt).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(line1).toBeInTheDocument()
    expect(lastLine).toBeInTheDocument()
    expect(authors).toBeInTheDocument()
  })

})