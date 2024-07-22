import AnnouncementsDataFetcher from "@/components/announcements/datafetcher";
import { DirectusDataFetcher, landing_page, article } from '@/lib/directusdatafetcher';
import { Announcement, AnnouncementsData } from '@/types';
import { readItems } from '@directus/sdk';

describe('AnnouncementsDataFetcher', () => {
  let fetcher: AnnouncementsDataFetcher;
  let mockClient: any;

  beforeEach(() => {
    mockClient = {
      request: jest.fn()
    };
    fetcher = new AnnouncementsDataFetcher();
    Object.defineProperty(fetcher, 'client', {
      get: () => mockClient
    });
  });

  describe('fetch', () => {
    it('should fetch announcements data based on query', async () => {
      const query: landing_page = {
        articles: [1, 2, 3],
        id: 0,
        status: "",
        user_created: "",
        date_created: "",
        user_updated: "",
        date_updated: "",
        logo: "",
        title: "",
        description: "",
        slug: "",
        mission: "",
        vision: "",
        tagline: null,
        featured: [],
        documentation: [],
        events: [],
        labels: [],
      };
      const linkIds = [101, 102];
      const rawAnnouncements: article[] = [
        { id: 101, status: 'active', sort: null, user_created: 'user1', date_created: '2023-01-01', user_updated: 'user1', category: 'Category 1', title: 'Title 1', body: 'Body 1', published_date: '2023-01-10', slug: 'title-1', image: 'image1.png', document: 1, labels: 'label1,label2', comments: [1, 2] },
        { id: 102, status: 'active', sort: null, user_created: 'user2', date_created: '2023-02-01', user_updated: 'user2', category: 'Category 2', title: 'Title 2', body: 'Body 2', published_date: '2023-02-10', slug: 'title-2', image: 'image2.png', document: 2, labels: 'label3,label4', comments: [3, 4] }
      ];
      const expectedAnnouncements: Announcement[] = [
        { title: 'Title 1', body: 'Body 1', image: 'url/image1.png' },
        { title: 'Title 2', body: 'Body 2', image: 'url/image2.png' }
      ];

      jest.spyOn(fetcher, 'findAnnouncementIds').mockResolvedValue(linkIds);
      jest.spyOn(fetcher, 'findAnnouncementsByIds').mockResolvedValue(rawAnnouncements);
      jest.spyOn(fetcher, 'getFileUrl').mockImplementation((url) => `url/${url}`);

      const result = await fetcher.fetch(query);

      expect(result.articles).toEqual(expectedAnnouncements);
      expect(fetcher.findAnnouncementIds).toHaveBeenCalledWith(query.articles);
      expect(fetcher.findAnnouncementsByIds).toHaveBeenCalledWith(linkIds);
    });
  });

  describe('findAnnouncementIds', () => {
    it('should find announcement IDs by given IDs', async () => {
      const ids = [1, 2, 3];
      const resultData = [
        { id: 1, landing_page_id: 1, articles_id: 101 },
        { id: 2, landing_page_id: 1, articles_id: 102 },
        { id: 3, landing_page_id: 1, articles_id: 103 }
      ];
      const expectedIds = [101, 102, 103];

      mockClient.request.mockResolvedValue(resultData);

      const result = await fetcher.findAnnouncementIds(ids);

      expect(result).toEqual(expectedIds);
    });
  });

  describe('findAnnouncementsByIds', () => {
    it('should find announcements by given IDs', async () => {
      const ids = [101, 102, 103];
      const resultData: article[] = [
        { id: 101, status: 'active', sort: null, user_created: 'user1', date_created: '2023-01-01', user_updated: 'user1', category: 'Category 1', title: 'Title 1', body: 'Body 1', published_date: '2023-01-10', slug: 'title-1', image: 'image1.png', document: 1, labels: 'label1,label2', comments: [1, 2] },
        { id: 102, status: 'active', sort: null, user_created: 'user2', date_created: '2023-02-01', user_updated: 'user2', category: 'Category 2', title: 'Title 2', body: 'Body 2', published_date: '2023-02-10', slug: 'title-2', image: 'image2.png', document: 2, labels: 'label3,label4', comments: [3, 4] },
        { id: 103, status: 'active', sort: null, user_created: 'user3', date_created: '2023-03-01', user_updated: 'user3', category: 'Category 3', title: 'Title 3', body: 'Body 3', published_date: '2023-03-10', slug: 'title-3', image: 'image3.png', document: 3, labels: 'label5,label6', comments: [5, 6] }
      ];

      mockClient.request.mockResolvedValue(resultData);

      const result = await fetcher.findAnnouncementsByIds(ids);

      expect(result).toEqual(resultData);
    });
  });
});
