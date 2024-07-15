import AnnouncementsDataFetcher from "@/components/announcements/datafetcher";
import { landing_page, announcement } from "@/lib/directusdatafetcher";
import { AnnouncementsData } from "@/types";

describe('AnnouncementsDataFetcher', () => {
  let fetcher: AnnouncementsDataFetcher;
  let clientMock: any;

  beforeEach(() => {
    clientMock = {
      request: jest.fn()
    };
    fetcher = new AnnouncementsDataFetcher();

    Object.defineProperty(fetcher, 'client', {
      get: jest.fn(() => clientMock)
    });
  });

  describe('fetch', () => {
    it('should fetch announcements data', async () => {
      const query: landing_page = {
        announcements: [1, 2, 3],
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
        documentation: []
      };

      const linkIds = [101, 102, 103];
      const rawAnnouncements: announcement[] = [
        { id: 101, landing_page_id: 1, announcements_id: 1, user_created: 'user1', date_created: '2023-01-01', user_updated: 'user1', date_updated: '2023-01-02', title: 'Title 1', description: 'Description 1', status: 'active', image: 'image1.png', body: 'Body 1' },
        { id: 102, landing_page_id: 1, announcements_id: 2, user_created: 'user2', date_created: '2023-02-01', user_updated: 'user2', date_updated: '2023-02-02', title: 'Title 2', description: 'Description 2', status: 'active', image: 'image2.png', body: 'Body 2' },
        { id: 103, landing_page_id: 1, announcements_id: 3, user_created: 'user3', date_created: '2023-03-01', user_updated: 'user3', date_updated: '2023-03-02', title: 'Title 3', description: 'Description 3', status: 'active', image: 'image3.png', body: 'Body 3' }
      ];

      jest.spyOn(fetcher, 'findAnnouncementIds').mockResolvedValue(linkIds);
      jest.spyOn(fetcher, 'findAnnouncementsByIds').mockResolvedValue(rawAnnouncements);
      jest.spyOn(fetcher, 'getFileUrl').mockImplementation((url: string) => `url/${url}`);

      const expected: AnnouncementsData = {
        announcements: [
          { title: 'Title 1', description: 'Description 1', image: 'url/image1.png' },
          { title: 'Title 2', description: 'Description 2', image: 'url/image2.png' },
          { title: 'Title 3', description: 'Description 3', image: 'url/image3.png' }
        ]
      };

      const result = await fetcher.fetch(query);

      expect(result).toEqual(expected);
    });
  });

  describe('findAnnouncementIds', () => {
    it('should find announcement IDs', async () => {
      const ids = [1, 2, 3];
      const resultData = [
        { announcements_id: 101 },
        { announcements_id: 102 },
        { announcements_id: 103 }
      ];

      clientMock.request.mockResolvedValue(resultData);

      const result = await fetcher.findAnnouncementIds(ids);

      expect(result).toEqual([101, 102, 103]);
      expect(clientMock.request).toHaveBeenCalled();
    });
  });

  describe('findAnnouncementsByIds', () => {
    it('should find announcements by IDs', async () => {
      const ids = [101, 102, 103];
      const resultData: announcement[] = [
        { id: 101, landing_page_id: 1, announcements_id: 1, user_created: 'user1', date_created: '2023-01-01', user_updated: 'user1', date_updated: '2023-01-02', title: 'Title 1', description: 'Description 1', status: 'active', image: 'image1.png', body: 'Body 1' },
        { id: 102, landing_page_id: 1, announcements_id: 2, user_created: 'user2', date_created: '2023-02-01', user_updated: 'user2', date_updated: '2023-02-02', title: 'Title 2', description: 'Description 2', status: 'active', image: 'image2.png', body: 'Body 2' },
        { id: 103, landing_page_id: 1, announcements_id: 3, user_created: 'user3', date_created: '2023-03-01', user_updated: 'user3', date_updated: '2023-03-02', title: 'Title 3', description: 'Description 3', status: 'active', image: 'image3.png', body: 'Body 3' }
      ];

      clientMock.request.mockResolvedValue(resultData);

      const result = await fetcher.findAnnouncementsByIds(ids);

      expect(result).toEqual(resultData);
      expect(clientMock.request).toHaveBeenCalled();
    });
  });
});
