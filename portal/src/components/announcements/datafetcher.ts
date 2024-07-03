import { DirectusDataFetcher, landing_page, announcement } from "@/lib/directusdatafetcher";
import { Announcement, AnnouncementsData } from "./types";
import { readItems } from "@directus/sdk";

export default class AnnouncementsDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<AnnouncementsData> {

    const linkIds = await this.findAnnouncementIds(query.announcements);
    const rawAnnouncements = await this.findAnnouncementsByIds(linkIds);

    const announcements = rawAnnouncements.map((rawAnnouncement) => {
      return {
        title: rawAnnouncement.title,
        description: rawAnnouncement.description,
        image: this.getFileUrl(rawAnnouncement.image),
      } as Announcement;
    });

    return {
      announcements: announcements
    };
  }

  private async findAnnouncementIds(ids : number[]) : Promise<number[]> {
    const result = await this.client.request(readItems('landing_page_announcements', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result.map((joinRow) => joinRow.announcements_id);
  }

  private async findAnnouncementsByIds(ids: number[]): Promise<announcement[]> {
    const result = await this.client.request(readItems('announcements', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result;
  }
}
