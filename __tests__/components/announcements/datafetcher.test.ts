import AnnouncementsDataFetcher from '@/components/announcements/datafetcher'
import { landing_page } from '@/lib/directusdatafetcher'
import { readItems } from '@directus/sdk'

// Mock the directus SDK and relevant methods
jest.mock('@directus/sdk', () => {
  const originalModule = jest.requireActual('@directus/sdk')
  return {
    ...originalModule,
    readItems: jest.fn(),
  }
})

jest.mock('../../../src/lib/directusdatafetcher', () => {
  const originalModule = jest.requireActual('../../../src/lib/directusdatafetcher')
  return {
    ...originalModule,
    portalConfig: {
      directusUrl: 'http://mocked-url',
      directusStaticToken: 'mocked-token',
    },
    DirectusDataFetcher: class {
      getFileUrl(uuid: string): string {
        return `/api/file-proxy/?uuid=${uuid}`
      }
      client = {
        request: jest.fn(),
      }
    },
  }
})

describe('AnnouncementsDataFetcher', () => {
  let fetcher: AnnouncementsDataFetcher

  beforeEach(() => {
    fetcher = new AnnouncementsDataFetcher()
  })

  it('should fetch announcements data', async () => {
    const mockAnnouncements = [
      {
        id: 1,
        status: 'published',
        user_created: 'user1',
        date_created: '2021-01-01',
        user_updated: 'user2',
        date_updated: '2021-01-05',
        title: 'Announcement 1',
        body: 'Body 1',
        image: 'image1',
        category: 'Announcements',
        landing_page: 1,
      },
      {
        id: 2,
        status: 'published',
        user_created: 'user3',
        date_created: '2021-01-02',
        user_updated: 'user4',
        date_updated: '2021-01-06',
        title: 'Announcement 2',
        body: 'Body 2',
        image: 'image2',
        category: 'Announcements',
        landing_page: 1,
      },
    ]
    const mockRequest = fetcher.client.request as jest.Mock
    mockRequest.mockResolvedValue(mockAnnouncements)

    const query: landing_page = {
      id: 1,
      status: 'published',
      user_created: 'a4d8b2e6-5f5a-456d-a2d1-72fa7ed08d8a',
      date_created: '2021-01-01',
      user_updated: 'a4d8b2e6-5f5a-456d-a2d1-72fa7ed08d8a',
      date_updated: '2021-01-05',
      logo: 'd90e4e07-3999-4b41-909e-29e14fb4a8af',
      title: 'Cool Title',
      description: 'Description of the landing page',
      slug: 'some-page',
      mission: 'Our mission',
      vision: 'Our vision',
      tagline: 'Our tagline',
      articles: [1, 2],
      featured: [3, 4],
      documentation: [5, 6],
      events: [7, 8],
      labels: [9, 10],
      footer: 'b4b0c0c4-0e39-4eb4-934d-fc4a3db9be25',
    }

    const data = await fetcher.fetch(query)

    expect(data).toEqual({
      articles: mockAnnouncements.map((raw) => ({
        title: raw.title,
        body: raw.body,
        image: fetcher.getFileUrl(raw.image),
        dateCreated: raw.date_created,
      })),
    })
  })
})
