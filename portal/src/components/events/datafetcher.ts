import { DirectusDataFetcher, landing_page, event, label } from "@/lib/directusdatafetcher";
import { Event, EventsData } from "@/types";
import { readItems } from "@directus/sdk";


export default class EventsDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<EventsData> {

		console.log(query)
		
		const eventIds = await this.findEventIds(query.events)
		console.log(eventIds)
		const events = await this.findEventsByIds(eventIds)
		console.log(events)
    return {
      events: events.map((rawEvent) => {
				return {
					id: rawEvent.id,
					status: rawEvent.status,
					userCreated: rawEvent.user_created,
					dateCreated: rawEvent.date_created,
					userUpdated: rawEvent.user_updated,
					dateUpdated: rawEvent.date_updated,
					title: rawEvent.title,
					description: rawEvent.description,
					image: rawEvent.image,
					schedule: {
						label: rawEvent.schedule ? rawEvent.schedule.label : null,
						startTime: rawEvent.schedule ? rawEvent.schedule.start_time : null,
					},
					startDate: rawEvent.start_date,
					endDate: rawEvent.end_date,
					slug: rawEvent.slug,
					labels: rawEvent.labels,
				} as Event
			})
    };
  }

  private async findEventIds(ids : number[]) : Promise<string[]> {
    const result = await this.client.request(readItems('landing_page_events_1', {
      filter: {
        id: {
          _in: ids,
        }
      }
    }));

    return result.map((joinRow) => joinRow.item);
  }

  private async findEventsByIds(ids: string[]): Promise<event[]> {
    const result = await this.client.request(readItems('events', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result;
  }
  // private async findLabelIdsByLandingPageId(id : number) : Promise<string[]> {
  //   const result = await this.client.request(readItems('landing_page_labels', {
  //     filter: {
  //       id: {
  //         _eq: id,
  //       }
  //     }
  //   }));

  //   return result.map((joinRow) => joinRow.labels_id);
  // }

  // private async findEventIdsByLabelIds(ids: string[]): Promise<string[]> {
  //   const result = await this.client.request(readItems('events_labels', {
  //     filter: {
  //       labels_id: {
  //         _in: ids
  //       }
  //     }
  //   }));

  //   return result.map((joinRow) => joinRow.events_id);;
  // }

	// private async findEventsByIds(ids: string[]): Promise<event[]> {
  //   const result = await this.client.request(readItems('events', {
  //     filter: {
  //       id: {
  //         _in: ids
  //       }
  //     }
  //   }));

  //   return result;
  // }
}
