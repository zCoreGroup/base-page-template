import HeroBannerDataFetcher from '../../../src/components/herobanner/dataFetcher'
import { HeroBannerData } from '@/types'
import { RestClient } from '@directus/sdk'
import { hero_banner } from '@/lib/directusdatafetcher'

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

describe('HeroBannerDataFetcher', () => {
  let fetcher: HeroBannerDataFetcher
  let mockClient: jest.Mocked<RestClient<any>>

  beforeEach(() => {
    fetcher = new HeroBannerDataFetcher()
    mockClient = fetcher.client as jest.Mocked<RestClient<any>>
  })

  describe('fetch', () => {
    it('should fetch and transform data correctly', async () => {
      const rawHeroBannerData: hero_banner[] = [
        {
          id: '1',
          source: '/image1.jpg',
          title: 'Title 1',
          heading: 'Heading 1',
          subheading: 'Subheading 1',
          imgCaption: 'Caption 1',
        },
      ]

      // Mock the findHeroBannerImages method
      jest.spyOn(fetcher, 'findHeroBannerImages').mockResolvedValue(rawHeroBannerData)

      const expectedData: HeroBannerData = {
        images: rawHeroBannerData,
      }

      const result = await fetcher.fetch()

      expect(result).toEqual(expectedData)
    })
  })

  describe('findHeroBannerImages', () => {
    it('should call client.request with correct parameters', async () => {
      const mockResult: hero_banner[] = [
        {
          id: '1',
          source: '/image1.jpg',
          title: 'Title 1',
          heading: 'Heading 1',
          subheading: 'Subheading 1',
          imgCaption: 'Caption 1',
        },
      ]

      mockClient.request.mockResolvedValueOnce(mockResult)

      const result = await fetcher.findHeroBannerImages()

      expect(result).toEqual(mockResult)
      expect(mockClient.request).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})
