import React from 'react'
import { render } from '@testing-library/react'
import LandingPage from '../../../src/app/[slug]/page'
import LandingPageDataFetcher from '@/app/[slug]/dataFetcher'
import {
  AnnouncementsData,
  BannerData,
  EventsData,
  FeaturedLinksData,
  FooterData,
  LandingPageData,
  NavbarData,
} from '@/types'

// Mock the entire LandingPage component
jest.mock('../../../src/app/[slug]/page', () => {
  return jest.fn(() => null)
})

// Mock the LandingPageDataFetcher
jest.mock('../../../src/app/[slug]/dataFetcher', () => {
  return {
    getInstance: jest.fn(() => ({
      fetch: jest.fn(),
    })),
  }
})

describe('LandingPage', () => {
  const mockData: LandingPageData = {
    navbar: {} as NavbarData,
    banner: {} as BannerData,
    featuredLinks: {} as FeaturedLinksData,
    announcements: {} as AnnouncementsData,
    events: {} as EventsData,
    footer: {} as FooterData,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(LandingPageDataFetcher.getInstance() as jest.Mocked<any>).fetch.mockResolvedValue(mockData)
  })

  it('calls the LandingPage component with correct props', async () => {
    render(<LandingPage params={{ slug: 'test-slug' }} />)

    expect(LandingPage).toHaveBeenCalledWith({ params: { slug: 'test-slug' } }, {})
  })
})
