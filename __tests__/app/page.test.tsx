import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../src/app/page'

// Mock the HomePageDataFetcher
jest.mock('../../src/app/homePageDataFetcher', () => ({
  getInstance: jest.fn(() => ({
    fetch: jest.fn(() =>
      Promise.resolve({
        navbar: {},
        featuredLinks: {},
        footer: {},
      })
    ),
  })),
}))

// Mock the components used in Home
jest.mock('../../src/components/navbar/Navbar', () => {
  return function MockNavbar() {
    return <div data-testid='navbar' />
  }
})

jest.mock('../../src/components/footer/Footer', () => {
  return function MockFooter() {
    return <div data-testid='footer' />
  }
})

jest.mock('../../src/components/featured-links/FeaturedLinks', () => {
  return function MockFeaturedLinks() {
    return <div data-testid='featured-links' />
  }
})

jest.mock('../../src/components/news-card/NewsCardSection', () => {
  return function MockNewsCardSection() {
    return <div data-testid='news-card-section' />
  }
})

jest.mock('../../src/components/event-card/EventCardSection', () => {
  return function MockEventCardSection() {
    return <div data-testid='event-card-section' />
  }
})

// Mock the Box component from MUI
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Box: ({ children, ...props }: React.PropsWithChildren<{ [key: string]: any }>) => (
    <div data-testid='main-box' {...props}>
      {children}
    </div>
  ),
}))

describe('Home', () => {
  it('renders the main content', async () => {
    render(await Home())

    // Check if the main components are rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('featured-links')).toBeInTheDocument()
    expect(screen.getByTestId('news-card-section')).toBeInTheDocument()
    expect(screen.getByTestId('event-card-section')).toBeInTheDocument()

    // Check if the layout structure is correct
    const mainContent = screen.getByTestId('home-page-main-box')
    expect(mainContent).toBeInTheDocument()
  })
})
