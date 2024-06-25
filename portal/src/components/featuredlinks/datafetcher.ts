import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { FeaturedLinkQuery, FeaturedLinksData } from "./types";

export default class FeaturedLinksDataFetcher extends DirectusDataFetcher {
  async fetch(query: FeaturedLinkQuery): Promise<FeaturedLinksData> {
    return {
      links: [
        { name: 'Link 1', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 2', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 3', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 4', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 5', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 6', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
      ],
    };
  }
}