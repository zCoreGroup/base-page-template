import NavbarDataFetcher from '../../../src/components/navbar/navbarDataFetcher'
import BannerDataFetcher from '../../../src/components/banner/datafetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import FeaturedLinksDataFetcher from '@/components/featured-links/dataFetcher'
import AnnouncementsDataFetcher from '../../../src/components/announcements/datafetcher'
import EventsDataFetcher from '../../../src/components/events/datafetcher'
import { LandingPageQuery, LandingPageData } from '@/types'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'
import LandingPageDataFetcher from '@/app/[slug]/dataFetcher'
import BreadCrumbDataFetcher from '../../../src/components/breadcrumbs/datafetcher'
import DefaultFooterContentDataFetecher from '@/components/footer/defaultFooterContentDataFetcher'

jest.mock('../../../src/components/navbar/navbarDataFetcher')
jest.mock('../../../src/components/banner/datafetcher')
jest.mock('../../../src/components/footer/dataFetcher')
jest.mock('../../../src/components/footer/defaultFooterContentDataFetcher')
jest.mock('../../../src/components/featured-links/dataFetcher')
jest.mock('../../../src/components/announcements/datafetcher')
jest.mock('../../../src/components/events/datafetcher')

// Mock instances of the data fetchers
const mockNavbarDataFetcher = new NavbarDataFetcher()
const mockBreadDataFetcher = new BreadCrumbDataFetcher()
const mockBannerDataFetcher = new BannerDataFetcher()
const mockDefaultFooterContentDataFetcher = new DefaultFooterContentDataFetcher()
const mockFooterDataFetcher = new FooterDataFetcher(mockDefaultFooterContentDataFetcher)
const mockFeaturedLinksDataFetcher = new FeaturedLinksDataFetcher()
const mockAnnouncementsDataFetcher = new AnnouncementsDataFetcher()
const mockEventsDataFetcher = new EventsDataFetcher()

mockNavbarDataFetcher.fetch = jest.fn().mockResolvedValue({
  leftLinks: [],
  rightLinks: [],
  logo: '',
  logoAlt: '',
  notificationsCount: 0,
  user: { name: '', avatarUrl: '' },
})

mockBreadDataFetcher.fetch = jest.fn().mockResolvedValue({
  links: [],
})

mockBannerDataFetcher.fetch = jest.fn().mockResolvedValue({
  logoSrc: '',
  logoAlt: '',
  title: '',
  tagline: '',
  missionText: '',
  visionText: '',
})
mockFooterDataFetcher.fetch = jest.fn().mockResolvedValue({
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
  informationTitle: '',
  informationText: '',
  linkFB: '',
  linkX: '',
  linkIG: '',
  linkYT: '',
  baseMapImage: '',
  quickLinks: [],
  guardianPortal: [],
  feedback: '',
})
mockFeaturedLinksDataFetcher.fetch = jest.fn().mockResolvedValue({ links: [] })
mockAnnouncementsDataFetcher.fetch = jest.fn().mockResolvedValue({ articles: [] })
mockEventsDataFetcher.fetch = jest.fn().mockResolvedValue({ events: [] })

describe('LandingPageDataFetcher', () => {
  let fetcher: LandingPageDataFetcher

  beforeEach(() => {
    fetcher = new LandingPageDataFetcher(
      mockNavbarDataFetcher,
      mockBreadDataFetcher,
      mockBannerDataFetcher,
      mockFeaturedLinksDataFetcher,
      mockAnnouncementsDataFetcher,
      mockEventsDataFetcher,
      mockFooterDataFetcher
    )
    jest.spyOn(fetcher, 'findLandingPageBySlug').mockImplementation((slug: string) => {
      if (slug === 'valid-slug') {
        return Promise.resolve({
          slug: 'valid-slug',
          title: 'Valid Title',
        } as any)
      } else if (slug === 'duplicate-slug') {
        return Promise.resolve([{ slug: 'duplicate-slug' }, { slug: 'duplicate-slug' }] as any)
      } else {
        return Promise.resolve([])
      }
    })
  })

  it('fetches landing page data successfully', async () => {
    const query: LandingPageQuery = { slug: 'valid-slug' }
    const data = await fetcher.fetch(query)

    expect(data).toEqual({
      navbar: {
        leftLinks: [],
        rightLinks: [],
        logo: '',
        logoAlt: '',
        notificationsCount: 0,
        user: { name: '', avatarUrl: '' },
      },
      breadcrumbs: {
        links: [],
      },
      banner: {
        logoSrc: '',
        logoAlt: '',
        title: '',
        tagline: '',
        missionText: '',
        visionText: '',
      },
      featuredLinks: { links: [] },
      announcements: { articles: [] },
      events: { events: [] },
      footer: {
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        informationTitle: '',
        informationText: '',
        linkFB: '',
        linkX: '',
        linkIG: '',
        linkYT: '',
        baseMapImage: '',
        quickLinks: [],
        guardianPortal: [],
        feedback: '',
      },
    } as LandingPageData)

    expect(mockNavbarDataFetcher.fetch).toHaveBeenCalled()
    expect(mockBreadDataFetcher.fetch).toHaveBeenCalledWith({
      slug: 'valid-slug',
      title: 'Valid Title',
    })
    expect(mockBannerDataFetcher.fetch).toHaveBeenCalledWith({
      slug: 'valid-slug',
      title: 'Valid Title',
    })
    expect(mockFeaturedLinksDataFetcher.fetch).toHaveBeenCalledWith({
      slug: 'valid-slug',
      title: 'Valid Title',
    })
    expect(mockAnnouncementsDataFetcher.fetch).toHaveBeenCalledWith({
      slug: 'valid-slug',
      title: 'Valid Title',
    })
    expect(mockEventsDataFetcher.fetch).toHaveBeenCalledWith({
      slug: 'valid-slug',
      title: 'Valid Title',
    })
    expect(mockFooterDataFetcher.fetch).toHaveBeenCalledWith({
      slug: 'valid-slug',
      title: 'Valid Title',
    })
  })

  it('should return the same instance for the singleton', () => {
    // Reset the singleton instance to ensure tests are independent
    ;(LandingPageDataFetcher as any).instance = undefined

    const instance1 = LandingPageDataFetcher.getInstance()
    const instance2 = LandingPageDataFetcher.getInstance()

    expect(instance1).toBe(instance2) // Check that both instances are the same
  })
})
