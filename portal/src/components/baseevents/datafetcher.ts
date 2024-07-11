import { DirectusDataFetcher, landing_page, announcement, base_event } from "@/lib/directusdatafetcher";
import { BaseEvent, BaseEventsData } from "./types";
import { readItems } from "@directus/sdk";

export default class BaseEventsDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<BaseEventsData> {

    const linkIds = await this.findBaseEventIds(query.base_events);
    const rawBaseEvents = await this.findBaseEventsByIds(linkIds);

    const baseEvents = rawBaseEvents.map((rawBaseEvent) => {
      return {
        title: rawBaseEvent.title,
        description: rawBaseEvent.description,
      } as BaseEvent;
    });

    return {
      baseEvents: baseEvents
    };
  }

  private async findBaseEventIds(ids : number[]) : Promise<number[]> {
    const result = await this.client.request(readItems('landing_page_base_events', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result.map((joinRow) => joinRow.base_events_id);
  }

  private async findBaseEventsByIds(ids: number[]): Promise<base_event[]> {
    const result = await this.client.request(readItems('base_events', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result;
  }
}
