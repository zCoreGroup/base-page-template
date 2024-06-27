import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { FeaturedLinkQuery, FeaturedLinksData } from "./types";

export default class FeaturedLinksDataFetcher extends DirectusDataFetcher {
  async fetch(query: FeaturedLinkQuery): Promise<FeaturedLinksData> {
    return {
      links: [
        { name: 'Link 1', imageUrl: 'https://spaceflightnow.com/wp-content/uploads/2024/03/20240318-Starlink-Feature-Image.jpg', url: 'https://www.spaceforce.com/' },
        { name: 'Link 2', imageUrl: 'https://bloximages.chicago2.vip.townnews.com/santamariatimes.com/content/tncms/assets/v3/editorial/f/56/f5620862-135c-5b7b-9cd7-b116a8e1b492/665f5a9959ad1.image.jpg?crop=1764%2C992%2C0%2C90&resize=300%2C169&order=crop%2Cresize', url: 'https://www.spaceforce.com/' },
        { name: 'Link 3', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 4', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 5', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
        { name: 'Link 6', imageUrl: 'https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png', url: 'https://www.spaceforce.com/' },
      ],
    };
  }
}
