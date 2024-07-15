import { DirectusDataFetcher, landing_page} from "@/lib/directusdatafetcher";
import { readItems } from "@directus/sdk";
import { FooterData, LocationData, CombinedFooterData} from "@/types";



export default class FooterDataFetcher extends DirectusDataFetcher {
    async fetch(query: landing_page): Promise<CombinedFooterData> {

      const footerInfo = await this.getFooterData(query.footer);
      const locationInfo = await this.getLocationData(footerInfo.location)
      const footerData = {
        ...locationInfo,
        ...footerInfo,
        name: locationInfo.name,
        address: locationInfo.address,
        coordinates: locationInfo.coordinates,
        city: locationInfo.city,
        zip: locationInfo.zip,
        state: locationInfo.state,
        phone: locationInfo.phone,
        email: locationInfo.email,
        hours: footerInfo.hours,
        feedback: footerInfo.feedback,
        twitter: footerInfo.twitter,
        facebook: footerInfo.facebook,
        instagram: footerInfo.instagram,
        youtube: footerInfo.youtube,
        linkedin: footerInfo.linkedin,
        title: footerInfo.title,
        location: footerInfo.location,
        flicker: footerInfo.flicker
      }

      console.log(footerData)
      return footerData
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
