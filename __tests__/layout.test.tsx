// RootLayout.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RootLayout from '../src/app/layout'

describe('RootLayout', () => {
  it('renders the children correctly', () => {
    const childText = 'Hello, World!'
    render(
      <RootLayout>
        <div>{childText}</div>
      </RootLayout>
    )

    // Check if the children are rendered
    expect(screen.getByText(childText)).toBeInTheDocument()
  })

  it('includes favicon links in the head', () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    // Check if the favicons are present
    expect(document.querySelector('link[rel="apple-touch-icon"]')).toHaveAttribute(
      'href',
      '/favicon/apple-touch-icon.png'
    )
    expect(document.querySelector('link[rel="icon"][sizes="32x32"]')).toHaveAttribute(
      'href',
      '/favicon/favicon-32x32.png'
    )
    expect(document.querySelector('link[rel="icon"][sizes="16x16"]')).toHaveAttribute(
      'href',
      '/favicon/favicon-16x16.png'
    )
    expect(document.querySelector('link[rel="manifest"]')).toHaveAttribute('href', '/favicon/csite.webmanifest')
    expect(document.querySelector('link[rel="icon"][href="/favicon/favicon.ico"]')).toBeInTheDocument()
  })
})
