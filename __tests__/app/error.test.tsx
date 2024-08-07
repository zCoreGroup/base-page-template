import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ErrorPage from '../../src/app/error' // Adjust the import path as necessary

describe('ErrorPage Component', () => {
  type ErrorWithDigest = Error & { digest?: string }

  const mockError: ErrorWithDigest = new Error('Test error') as ErrorWithDigest
  mockError.digest = 'test-digest'

  const mockReset = jest.fn()

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders error message', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument()
  })

  it('renders Try again button', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    expect(screen.getByText('Try again')).toBeInTheDocument()
  })

  it('calls reset function when Try again button is clicked', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    fireEvent.click(screen.getByText('Try again'))
    expect(mockReset).toHaveBeenCalledTimes(1)
  })

  it('logs error to console', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />)
    expect(console.error).toHaveBeenCalledWith(mockError)
  })
})
