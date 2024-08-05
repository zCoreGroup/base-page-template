import NavbarDataFetcher from '@/components/navbar/navbarDataFetcher'
import { RestClient } from '@directus/sdk'
import { readSingleton } from '@directus/sdk'

// Mock the directus SDK and relevant methods
jest.mock('@directus/sdk', () => {
  return {
    ...jest.requireActual('@directus/sdk'),
    createDirectus: jest.fn().mockImplementation(() => {
      return {
        with: jest.fn().mockReturnThis(),
        staticToken: jest.fn().mockReturnThis(),
        rest: jest.fn().mockReturnThis(),
        request: jest.fn(),
      }
    }),
    readSingleton: jest.fn(),
  }
})

// Mock portalConfig
jest.mock('../../../src/lib/directusdatafetcher', () => {
  return {
    ...jest.requireActual('../../../src/lib/directusdatafetcher'),
    portalConfig: {
      directusUrl: 'http://mocked-url',
      directusStaticToken: 'mocked-token',
    },
  }
})

describe('NavbarDataFetcher', () => {
  let fetcher: NavbarDataFetcher
  let client: jest.Mocked<RestClient<any>>

  beforeEach(() => {
    fetcher = new NavbarDataFetcher()
    client = fetcher.client as jest.Mocked<RestClient<any>>
  })

  it('should fetch and transform data correctly', async () => {
    const mockNavigationData = {
      name1: 'Home',
      link1: '/home',
      name2: 'About',
      link2: '/about',
      name3: 'Services',
      link3: '/services',
      name4: 'Contact',
      link4: '/contact',
      name5: 'Blog',
      link5: '/blog',
    }

    client.request.mockImplementationOnce(() => Promise.resolve(mockNavigationData))

    const expectedData = {
      logo: '/assets/guardian_one_logo_wordMark.png',
      logoAlt: 'Logo',
      notificationsCount: 0,
      user: {
        name: 'User Name',
        avatarUrl: '/assets/avatar.png',
      },
      leftLinks: [
        {
          name: 'Home',
          url: '/home',
        },
        {
          name: 'About',
          url: '/about',
        },
      ],
      rightLinks: [
        {
          name: 'Services',
          url: '/services',
        },
        {
          name: 'Contact',
          url: '/contact',
        },
        {
          name: 'Blog',
          url: '/blog',
        },
      ],
    }

    const result = await fetcher.fetch()
    expect(result).toEqual(expectedData)
  })
})
