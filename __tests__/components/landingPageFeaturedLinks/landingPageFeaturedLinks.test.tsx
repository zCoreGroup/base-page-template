import React from 'react'
import { render, screen } from '@testing-library/react'
import LandingPageFeaturedLinks from '@/components/landingPageFeaturedLinks/landingPageFeaturedLinks'
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

describe('LandingPageFeaturedLinks', () => {
  it('renders the title', () => {
    render(<LandingPageFeaturedLinks data={sampleData} />)
    const titleElement = screen.getByText(/Landing Page Featured Links/i)
    if (!titleElement) throw new Error('Title not found')
  })

  it('renders the correct number of links', () => {
    render(<LandingPageFeaturedLinks data={sampleData} />)
    const imageElements = screen.getAllByRole('img')
    if (imageElements.length !== sampleData.links.length) {
      throw new Error(`Expected ${sampleData.links.length} images, but found ${imageElements.length}`)
    }
  })

  it('renders link names correctly', () => {
    render(<LandingPageFeaturedLinks data={sampleData} />)
    sampleData.links.forEach((link) => {
      const linkNameElement = screen.getByText(link.name)
      if (!linkNameElement) throw new Error(`Link name ${link.name} not found`)
    })
  })
})
