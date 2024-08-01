import BreadCrumbDataFetcher from '@/components/breadcrumbs/datafetcher'
import { RestClient, DirectusClient } from '@directus/sdk'
import { landing_page } from '@/lib/directusdatafetcher'
import { BreadCrumbData } from '@/types'

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
  }
})

describe('BreadCrumbDataFetcher', () => {
  let fetcher: BreadCrumbDataFetcher
  let mockClient: jest.Mocked<RestClient<any>>

  beforeEach(() => {
    fetcher = new BreadCrumbDataFetcher()

    mockClient = fetcher.client as jest.Mocked<RestClient<any>>
  })

  describe('fetch', () => {
    it('should return correctly formatted BreadCrumbData', async () => {
      const query: landing_page = {
        featured: [1, 2, 3],
        id: 0,
        status: '',
        user_created: '',
        date_created: '',
        user_updated: '',
        date_updated: '',
        logo: '',
        title: '',
        description: '',
        slug: '',
        tagline: null,
        documentation: [],
        mission: '',
        vision: '',
        articles: [],
        events: [],
        labels: [],
        footer: '',
      }

      const mockResult: landing_page[] = [
        { ...query, slug: 'home', title: 'Home' },
        { ...query, slug: 'Vanderberg', title: 'Vanderberg' },
        { ...query, slug: 'test-page', title: 'Test Page' },
      ]

      // Mock the findLandingPageBreadCrumbsBySlug method
      jest.spyOn(fetcher, 'findLandingPageBreadCrumbsBySlug').mockResolvedValue(mockResult)
      const result: BreadCrumbData = await fetcher.fetch(query)

      expect(result).toEqual({
        links: [
          { text: 'Home', link: 'home' },
          { text: 'Vanderberg', link: 'Vanderberg' },
          { text: 'Test-page', link: 'test-page' },
        ],
      })
    })
  })

  describe('findLandingPageBreadCrumbsBySlug', () => {
    it('should call client.request with correct parameters', async () => {
      const mockResult: landing_page = {
        featured: [1, 2, 3],
        id: 0,
        status: '',
        user_created: '',
        date_created: '',
        user_updated: '',
        date_updated: '',
        logo: '',
        title: '',
        description: '',
        slug: '',
        tagline: null,
        documentation: [],
        mission: '',
        vision: '',
        articles: [],
        events: [],
        labels: [],
        footer: '',
      }

      mockClient.request.mockResolvedValueOnce(mockResult)

      const result = await fetcher.findLandingPageBreadCrumbsBySlug('test-page')

      expect(result).toEqual(mockResult)
      expect(mockClient.request).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})
