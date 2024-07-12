import { DirectusDataFetcher, landing_page, base_event } from "@/lib/directusdatafetcher";
import { BaseEvent, BaseEventsData } from "@/types";
import { readItems } from "@directus/sdk";

const baseEventsDummy = [
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 1',
    description: 'This is the description for card 1.',
    link: 'https://example.com/card1',
  },
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 2',
    description: 'This is the description for card 2.',
    link: 'https://example.com/card2',
  },
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 3',
    description: 'This is the description for card 3.',
    link: 'https://example.com/card3',
  },
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 4',
    description: 'This is the description for card 3.',
    link: 'https://example.com/card3',
  },
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 5',
    description: 'This is the description for card 3.',
    link: 'https://example.com/card3',
  },
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 6',
    description: 'This is the description for card 3.',
    link: 'https://example.com/card3',
  },
  {
    image: 'https://i.imgur.com/aXGZSeS.jpeg',
    title: 'Card 7',
    description: 'This is the description for card 3.',
    link: 'https://example.com/card3',
  },
  // Add more cards as needed
];
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
      baseEvents: baseEventsDummy
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
