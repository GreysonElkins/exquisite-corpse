import React from 'react'
import LiveDisplay from './LiveDisplay'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('LiveDisplay', () => {
  it('should display a header, a form, a timer and at least one button', () => {
    const textInputs = {
        title: 'Hi',
        story: 'This is a story'
    }
    render(
      <LiveDisplay
        textInputs={textInputs}
      />
    )

    expect(screen.getByText("Hi")).toBeInTheDocument()
    expect(screen.getByText("This is a story")).toBeInTheDocument()
  })
})