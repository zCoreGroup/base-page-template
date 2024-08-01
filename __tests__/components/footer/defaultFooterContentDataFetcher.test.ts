import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'
import { RestClient } from '@directus/sdk'
import { RawFooterLink } from '@/lib/directusdatafetcher'

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
    readItems: jest.fn(),
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

describe('DefaultFooterContentDataFetcher', () => {
  let fetcher: DefaultFooterContentDataFetcher
  let client: jest.Mocked<RestClient<any>>

  beforeEach(() => {
    fetcher = new DefaultFooterContentDataFetcher()
    client = fetcher.client as jest.Mocked<RestClient<any>>
  })

  it('should fetch and transform data correctly', async () => {
    const mockQuickLinks: RawFooterLink[] = [
      { id: '1', name: 'Quick Link 1', url: 'http://quicklink1.com', open_in_new: '1' },
      { id: '2', name: 'Quick Link 2', url: 'http://quicklink2.com', open_in_new: '0' },
    ]
    const mockPortalLinks: RawFooterLink[] = [
      { id: '1', name: 'Portal Link 1', url: 'http://portallink1.com', open_in_new: '1' },
      { id: '2', name: 'Portal Link 2', url: 'http://portallink2.com', open_in_new: '0' },
    ]
    const mockFeedback = { feedback: 'Great job!' }
    const mockLabels = [{ id: 1, name: 'Default' }]
    const mockFooterLabels = [{ footer_id: 'default-footer-id' }]

    client.request
      .mockImplementationOnce(() => Promise.resolve(mockQuickLinks))
      .mockImplementationOnce(() => Promise.resolve(mockPortalLinks))
      .mockImplementationOnce(() => Promise.resolve(mockFeedback))
      .mockImplementationOnce(() => Promise.resolve(mockLabels))
      .mockImplementationOnce(() => Promise.resolve(mockFooterLabels))

    const expectedData = {
      quickLinks: [
        { name: 'Quick Link 1', url: 'http://quicklink1.com', openInNew: true },
        { name: 'Quick Link 2', url: 'http://quicklink2.com', openInNew: false },
      ],
      portalLinks: [
        { name: 'Portal Link 1', url: 'http://portallink1.com', openInNew: true },
        { name: 'Portal Link 2', url: 'http://portallink2.com', openInNew: false },
      ],
      feedback: 'Great job!',
      footerId: 'default-footer-id',
    }

    const result = await fetcher.fetch()
    expect(result).toEqual(expectedData)
  })
})
