import { DirectusDataFetcher, landing_page, article } from "@/lib/directusdatafetcher";
import { Announcement, AnnouncementsData } from "@/types";
import { readItems } from "@directus/sdk";

export default class AnnouncementsDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<AnnouncementsData> {

    const linkIds = await this.findAnnouncementIds(query.articles);
    const rawAnnouncements = await this.findAnnouncementsByIds(linkIds);

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

  async findAnnouncementIds(ids : number[]) : Promise<number[]> {
    const result = await this.client.request(readItems('landing_page_articles', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result.map((joinRow) => joinRow.articles_id);
  }

  async findAnnouncementsByIds(ids: number[]): Promise<article[]> {
    const result = await this.client.request(readItems('articles', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result;
  }
}
