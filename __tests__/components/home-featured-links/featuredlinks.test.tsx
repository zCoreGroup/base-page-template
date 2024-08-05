import React from 'react'
import { render, screen } from '@testing-library/react'
import FeaturedLinks from '@/components/home-featured-links/FeaturedLinks'
import { FeaturedLinksData } from '@/types'

// Sample data for testing
const sampleData: FeaturedLinksData = {
  links: [
    {
      name: 'Link 1',
      url: 'https://example.com/link1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Link 2',
      url: 'https://example.com/link2',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ],
}

describe('FeaturedLinks', () => {
  it('renders the title', () => {
    render(<FeaturedLinks data={sampleData} />)
    const titleElement = screen.getByText(/Featured Links/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the correct number of links', () => {
    render(<FeaturedLinks data={sampleData} />)
    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(sampleData.links.length)
  })

  it('renders link names correctly', () => {
    render(<FeaturedLinks data={sampleData} />)
    sampleData.links.forEach((link) => {
      const linkNameElement = screen.getByText(link.name)
      expect(linkNameElement).toBeInTheDocument()
    })
  })
})
