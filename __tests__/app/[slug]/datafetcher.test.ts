import LandingPageDataFetcher from '../../../src/app/[slug]/datafetcher'
import NavbarDataFetcher from '../../../src/components/navbar/datafetcher'
import BannerDataFetcher from '../../../src/components/banner/datafetcher'
import FooterDataFetcher from '../../../src/components/footer/dataFetcher'
import FeaturedLinksDataFetcher from '../../../src/components/featuredlinks/datafetcher'
import AnnouncementsDataFetcher from '../../../src/components/announcements/datafetcher'
import EventsDataFetcher from '../../../src/components/events/datafetcher'
import { LandingPageQuery, LandingPageData } from '../../../src/types'

jest.mock('../../../src/components/navbar/datafetcher')
jest.mock('../../../src/components/banner/datafetcher')
jest.mock('../../../src/components/footer/dataFetcher')
jest.mock('../../../src/components/featuredlinks/datafetcher')
jest.mock('../../../src/components/announcements/datafetcher')
jest.mock('../../../src/components/events/datafetcher')

// Mock instances of the data fetchers
const mockNavbarDataFetcher = new NavbarDataFetcher()
const mockBannerDataFetcher = new BannerDataFetcher()
const mockFooterDataFetcher = new FooterDataFetcher()
const mockFeaturedLinksDataFetcher = new FeaturedLinksDataFetcher()
const mockAnnouncementsDataFetcher = new AnnouncementsDataFetcher()
const mockEventsDataFetcher = new EventsDataFetcher()

// Mock methods for each data fetcher
mockNavbarDataFetcher.fetch = jest.fn().mockResolvedValue({
  leftLinks: [],
  rightLinks: [],
  logo: '',
  logoAlt: '',
  notificationsCount: 0,
  user: { name: '', avatarUrl: '' },
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
})
mockFeaturedLinksDataFetcher.fetch = jest.fn().mockResolvedValue({ links: [] })
mockAnnouncementsDataFetcher.fetch = jest.fn().mockResolvedValue({ articles: [] })
mockEventsDataFetcher.fetch = jest.fn().mockResolvedValue({ events: [] })

describe('LandingPageDataFetcher', () => {
  let fetcher: LandingPageDataFetcher

  beforeEach(() => {
    fetcher = new LandingPageDataFetcher(
      mockNavbarDataFetcher,
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
      },
    } as LandingPageData)

    expect(mockNavbarDataFetcher.fetch).toHaveBeenCalledWith({
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
})
