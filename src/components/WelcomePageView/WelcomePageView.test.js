import React from 'react'
import WelcomePageView from './WelcomePageView'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import testData from "../../assets/testData/testData";
import ApiHelper from '../../ApiHelper/ApiHelper'
jest.mock('../../ApiHelper/ApiHelper.js')

describe('WelcomePageView', () => {

  beforeEach(() => {
    ApiHelper.getData.mockResolvedValueOnce(testData.stories)
    render(
      <MemoryRouter>
        <WelcomePageView />
      </MemoryRouter>
    )
  })

  it('Should have the correct content when rendered', () => {
    const heading = screen.getByText('Rules of Play')
    const bulletPoint = screen.getByText('Exquisite Corpse is a collaborative', { exact: false })
    const instrOne = screen.getByText('Select a new prompt', { exact: false })
    const instrTwo = screen.getByText('Start your section', { exact: false })
    const instrThree = screen.getByText('Be creative and write fast', { exact: false })
    const buttons = screen.getAllByRole('button')
    
    expect(heading).toBeInTheDocument()
    expect(bulletPoint).toBeInTheDocument()
    expect(instrOne).toBeInTheDocument()
    expect(instrTwo).toBeInTheDocument()
    expect(instrThree).toBeInTheDocument()
    expect(buttons).toHaveLength(2)
  })

  it('Should make an api call to render data', () => {
    expect(ApiHelper.getData).toHaveBeenCalledTimes(2)
  })

  it('Should only render books that are unpublished', () => {
    const book = screen.getByRole('button', { name: /the birdman for real horror oct 2020/i })

    expect(book).toBeInTheDocument()
  })
})
