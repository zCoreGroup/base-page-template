import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProfileError from '../../../src/app/profile/error'

describe('ProfileError', () => {
  const mockError = new Error('Test error message')
  const mockReset = jest.fn()

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders error message', () => {
    render(<ProfileError error={mockError} reset={mockReset} />)

    expect(screen.getByText('Error loading profile data')).toBeInTheDocument()
    expect(screen.getByText('Test error message')).toBeInTheDocument()
  })

  it('calls reset function when "Try again" button is clicked', () => {
    render(<ProfileError error={mockError} reset={mockReset} />)

    const tryAgainButton = screen.getByText('Try again')
    fireEvent.click(tryAgainButton)

    expect(mockReset).toHaveBeenCalledTimes(1)
  })

  it('logs error to console', () => {
    render(<ProfileError error={mockError} reset={mockReset} />)

    expect(console.error).toHaveBeenCalledWith(mockError)
  })
})
