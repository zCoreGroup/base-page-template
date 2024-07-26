import { DirectusDataFetcher, landing_page, article, label } from "@/lib/directusdatafetcher";
import { Article, EventsData } from "@/types";
import { readItems } from "@directus/sdk";

// src/events/datafetcher.ts
export default class EventsDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<EventsData> {
		const articles = await this.findEventsByLandingPageId(query.id)
    return {
      events: articles.map((rawArticle) => {
				return {
					id: rawArticle.id,
					status: rawArticle.status,
					userCreated: rawArticle.user_created,
					dateCreated: rawArticle.date_created,
					userUpdated: rawArticle.user_updated,
					title: rawArticle.title,
					image: this.getFileUrl(rawArticle.image),
					slug: rawArticle.slug,
				} as Article
			})
    };
  }

  private async findEventsByLandingPageId(id: number): Promise<article[]> {
    const result = await this.client.request(readItems('articles', {
      filter: {
        landing_page: {
          _eq: id,
        },
      }
    }));

    return result;
  }
}

// lib/directusdatafetcher.ts
