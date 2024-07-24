import { DirectusDataFetcher, landing_page, article } from "@/lib/directusdatafetcher";
import { Announcement, AnnouncementsData } from "@/types";
import { readItems } from "@directus/sdk";

export default class AnnouncementsDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<AnnouncementsData> {

    const rawAnnouncements = await this.findAnnouncementsLandingPageId(query.id);

    const articles = rawAnnouncements.map((rawAnnouncement) => {

      return {
        title: rawAnnouncement.title,
        body: rawAnnouncement.body,
        image: !!rawAnnouncement.image ? this.getFileUrl(rawAnnouncement.image) : '',
      } as Announcement;
    });

    return {
      articles: articles
    };
  }

  async findAnnouncementsLandingPageId(id: number): Promise<article[]> {
    const result = await this.client.request(readItems('articles', {
      filter: {
        landing_page: {
          _eq: id,
        },
        category: {
          _eq: "Announcements",
        },
      }
    }));

    return result;
  }
}
