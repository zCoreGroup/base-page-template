// __tests__/eventsdatafetcher.test.ts
import EventsDataFetcher from '@/events/datafetcher';
import { readItems } from '@directus/sdk';
import { event, EventsData, landing_page } from '@/types';

// Mock the Directus SDK's readItems function
jest.mock('@directus/sdk', () => ({
  ...jest.requireActual('@directus/sdk'),
  readItems: jest.fn(),
}));

const mockClientRequest = jest.fn();

jest.mock('@/lib/directusdatafetcher', () => ({
  ...jest.requireActual('@/lib/directusdatafetcher'),
  DirectusDataFetcher: class {
    get client() {
      return {
        request: mockClientRequest,
      };
    }

    getFileUrl(uuid: string): string {
      return `/api/file-proxy/?uuid=${uuid}`;
    }
  },
}));

const mockLandingPageQuery: landing_page = {
  id: 1,
  status: 'published',
  user_created: 'user1',
  date_created: '2023-01-01',
  user_updated: 'user2',
  date_updated: '2023-01-02',
  logo: 'logo.png',
  title: 'Test Landing Page',
  description: 'Test Description',
  slug: 'test-landing-page',
  mission: 'Test Mission',
  vision: 'Test Vision',
  tagline: 'Test Tagline',
  articles: [1, 2],
  featured: [3, 4],
  documentation: [5, 6],
  events: [7, 8],
  labels: [9, 10],
};

const mockEvents = [
  {
    id: '1',
    status: 'active',
    user_created: 'user1',
    date_created: '2023-01-01',
    user_updated: 'user2',
    date_updated: '2023-01-02',
    title: 'Event 1',
    description: '<p>Description 1</p>',
    image: 'image1.jpg',
    schedule: {
      label: 'Schedule 1',
      start_time: '2023-01-03T10:00:00',
    },
    start_date: '2023-01-03',
    end_date: '2023-01-04',
    slug: 'event-1',
    labels: [1, 2],
  },
  {
    id: '2',
    status: 'active',
    user_created: 'user3',
    date_created: '2023-02-01',
    user_updated: 'user4',
    date_updated: '2023-02-02',
    title: 'Event 2',
    description: '<p>Description 2</p>',
    image: 'image2.jpg',
    schedule: {
      label: 'Schedule 2',
      start_time: '2023-02-03T10:00:00',
    },
    start_date: '2023-02-03',
    end_date: '2023-02-04',
    slug: 'event-2',
    labels: [3, 4],
  },
];

describe('EventsDataFetcher', () => {
  let fetcher: EventsDataFetcher;

  beforeEach(() => {
    fetcher = new EventsDataFetcher();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches event data correctly', async () => {
    // Mock the client request responses
    mockClientRequest
      .mockResolvedValueOnce([{ item: '1' }, { item: '2' }]) // findEventIds response
      .mockResolvedValueOnce(mockEvents); // findEventsByIds response

    const result: EventsData = await fetcher.fetch(mockLandingPageQuery);

    expect(result).toEqual({
      events: mockEvents.map((rawEvent) => ({
        id: rawEvent.id,
        status: rawEvent.status,
        userCreated: rawEvent.user_created,
        dateCreated: rawEvent.date_created,
        userUpdated: rawEvent.user_updated,
        dateUpdated: rawEvent.date_updated,
        title: rawEvent.title,
        description: rawEvent.description,
        image: fetcher.getFileUrl(rawEvent.image),
        schedule: {
          label: rawEvent.schedule ? rawEvent.schedule.label : null,
          startTime: rawEvent.schedule ? rawEvent.schedule.start_time : null,
        },
        startDate: rawEvent.start_date,
        endDate: rawEvent.end_date,
        slug: rawEvent.slug,
        labels: rawEvent.labels,
      })),
    });

    // Verify the correct requests were made
    expect(mockClientRequest).toHaveBeenNthCalledWith(
      1,
      readItems('landing_page_news', {
        filter: {
          id: {
            _in: mockLandingPageQuery.events,
          },
        },
      })
    );

    expect(mockClientRequest).toHaveBeenNthCalledWith(
      2,
      readItems('events', {
        filter: {
          id: {
            _in: ['1', '2'],
          },
        },
      })
    );
  });

  test('getFileUrl returns correct URL', () => {
    const url = fetcher.getFileUrl('1234-uuid');
    expect(url).toBe('/api/file-proxy/?uuid=1234-uuid');
  });
});
