import { DirectusDataFetcher, landing_page} from "@/lib/directusdatafetcher";
import { readItems } from "@directus/sdk";
import { FooterData, LocationData} from "@/types";



export default class FooterDataFetcher extends DirectusDataFetcher {
    async fetch(query: landing_page): Promise<FooterData> {

      const footerInfo = await this.getFooterData(query.footer);
      const locationInfo = await this.getLocationData(footerInfo.location)
      return footerInfo
    }

    private async getFooterData(ids: string): Promise<FooterData> {
      const result = await this.client.request(readItems('footer', {
        filter: {
          id: {
            _eq: ids
          }
        }
      }));
      return result[0];
    }

    private async getLocationData(ids: number): Promise<LocationData> {
      const result = await this.client.request(readItems('locations', {
        filter: {
            id: {
                _eq: ids
            }
        }
      }));
    return result[0]
    }
}
