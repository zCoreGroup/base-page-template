// HomePageDataFetcher.test.ts

import HomePageDataFetcher from '@/app/homePageDataFetcher'
import NavbarDataFetcher from '@/components/navbar/navbarDataFetcher'
import HomeFeaturedLinksDataFetcher from '@/components/home-featured-links/homeFeaturedLinksDataFetcher'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import { HomePageData, NavbarData, FeaturedLinksData, FooterData, HeroBannerData } from '@/types'
import HeroBannerDataFetcher from '@/components/herobanner/dataFetcher'

// Mock dependencies
jest.mock('../../src/components/navbar/navbarDataFetcher')
jest.mock('../../src/components/herobanner/dataFetcher')
jest.mock('../../src/components/home-featured-links/homeFeaturedLinksDataFetcher')
jest.mock('../../src/components/footer/dataFetcher')
jest.mock('../../src/components/footer/defaultFooterContentDataFetcher')

describe('HomePageDataFetcher', () => {
  let homePageDataFetcher: HomePageDataFetcher
  let mockNavbarFetcher: jest.Mocked<NavbarDataFetcher>
  let mockHeroBannerFetcher: jest.Mocked<HeroBannerDataFetcher>
  let mockFeaturedLinksFetcher: jest.Mocked<HomeFeaturedLinksDataFetcher>
  let mockFooterFetcher: jest.Mocked<FooterDataFetcher>
  let mockDefaultFooterContentFetcher: jest.Mocked<DefaultFooterContentDataFetcher>

  beforeEach(() => {
    mockNavbarFetcher = new NavbarDataFetcher() as jest.Mocked<NavbarDataFetcher>
    mockHeroBannerFetcher = new HeroBannerDataFetcher() as jest.Mocked<HeroBannerDataFetcher>
    mockFeaturedLinksFetcher = new HomeFeaturedLinksDataFetcher() as jest.Mocked<HomeFeaturedLinksDataFetcher>
    mockDefaultFooterContentFetcher =
      new DefaultFooterContentDataFetcher() as jest.Mocked<DefaultFooterContentDataFetcher>
    mockFooterFetcher = new FooterDataFetcher(mockDefaultFooterContentFetcher) as jest.Mocked<FooterDataFetcher>

    homePageDataFetcher = new HomePageDataFetcher(
      mockNavbarFetcher,
      mockHeroBannerFetcher,
      mockFeaturedLinksFetcher,
      mockFooterFetcher
    )
  })

  it('should fetch and return home page data correctly', async () => {
    const mockNavbarData: NavbarData = {
      leftLinks: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ],
      rightLinks: [
        { name: 'Contact', url: '/contact' },
        { name: 'Help', url: '/help' },
      ],
      logo: 'logo.png',
      logoAlt: 'Logo Alt Text',
      notificationsCount: 5,
      user: {
        name: 'John Doe',
        avatarUrl: 'avatar.png',
      },
    }

    const mockFeaturedLinksData: FeaturedLinksData = {
      links: [
        { name: 'Link 1', url: 'http://link1.com', imageUrl: 'link1.png' },
        { name: 'Link 2', url: 'http://link2.com', imageUrl: 'link2.png' },
      ],
    }

    const mockFooterData: FooterData = {
      streetAddress: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      phone: '555-555-5555',
      email: 'info@example.com',
      informationTitle: 'Information',
      informationText: 'Some information text here',
      linkFB: 'http://facebook.com',
      linkX: 'http://x.com',
      linkIG: 'http://instagram.com',
      linkYT: 'http://youtube.com',
      baseMapImage: 'baseMap.png',
      quickLinks: [
        { name: 'Quick Link 1', url: 'http://quicklink1.com', openInNew: true },
        { name: 'Quick Link 2', url: 'http://quicklink2.com', openInNew: false },
      ],
      guardianPortal: [
        { name: 'Portal Link 1', url: 'http://portallink1.com', openInNew: true },
        { name: 'Portal Link 2', url: 'http://portallink2.com', openInNew: false },
      ],
      feedback: 'Feedback text',
      default: true,
    }
    const mockHeroData: HeroBannerData = {
      images: [
        {
          id: '1',
          source: '/image1.jpg',
          title: 'Title 1',
          heading: 'Heading 1',
          subheading: 'Subheading 1',
          imgCaption: 'Caption 1',
        },
      ],
    }
    // Mock the fetch methods
    mockNavbarFetcher.fetch.mockResolvedValue(mockNavbarData)
    mockHeroBannerFetcher.fetch.mockResolvedValue(mockHeroData)
    mockFeaturedLinksFetcher.fetch.mockResolvedValue(mockFeaturedLinksData)
    mockFooterFetcher.fetch.mockResolvedValue(mockFooterData)

    const expectedData: HomePageData = {
      navbar: mockNavbarData,
      heroBanner: mockHeroData,
      featuredLinks: mockFeaturedLinksData,
      footer: mockFooterData,
    }

    const result = await homePageDataFetcher.fetch()
    expect(result).toEqual(expectedData)
  })

  it('should throw an error if data fetching fails', async () => {
    // Mock the fetch methods to throw an error
    mockNavbarFetcher.fetch.mockRejectedValue(new Error('Failed to fetch navbar'))

    await expect(homePageDataFetcher.fetch()).rejects.toThrow('Failed to fetch navbar')
  })

  it('should return the same instance for the singleton', () => {
    // Reset the singleton instance to ensure tests are independent
    ;(HomePageDataFetcher as any).instance = undefined

    const instance1 = HomePageDataFetcher.getInstance()
    const instance2 = HomePageDataFetcher.getInstance()

    expect(instance1).toBe(instance2) // Check that both instances are the same
  })
})
