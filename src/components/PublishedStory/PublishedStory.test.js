import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import PublishedStory from "./PublishedStory";
import testData from "../../assets/testData/testData";

describe('PublishedStory component', () => {

  beforeEach(() => {
    render(<PublishedStory 
      currentStory={testData.stories[2]} 
      currentAuthors={testData.authors}/>)
  })

  it('should render details about the story', () => {  
    expect(screen.getByRole('heading', { name: 'Birdhouse in Your Soul'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /October 10, 2020 Genre: undefined/i})).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /October 10, 2020/i })).toBeInTheDocument()
    expect(screen.getByText('Blue canary in the outlet by the lightswitch.')).toBeInTheDocument()
    expect(screen.getByText("Say I'm the only bee in your bonnet.")).toBeInTheDocument()
  })
})