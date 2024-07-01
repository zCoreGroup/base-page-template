import { DirectusDataFetcher, landing_page, link } from "@/lib/directusdatafetcher";
import { FeaturedLinksData } from "./types";
import { readItems } from "@directus/sdk";

export default class FeaturedLinksDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<FeaturedLinksData> {

    const rawLinks = await this.findLinksByIds(query.featured);

    const links = rawLinks.map((rawLink) => {
      return {
        name: rawLink.name,
        imageUrl: this.getFileUrl(rawLink.image),
        url: rawLink.url
      }
    });

    return {
      links: links
    };
  }

  async findLinksByIds(ids: number[]): Promise<link[]> {
    const result = await this.client.request(readItems('links', {
      filter: {
        id: {
          _in: ids
        }
      }
    }));

    return result;
  }
}