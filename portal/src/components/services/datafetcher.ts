import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { ServicesData } from "./types";
import { readItems } from "@directus/sdk";


export default class ServicesDataFetcher extends DirectusDataFetcher {
    async fetch(query: landing_page): Promise<ServicesData> {
    
        const linkIds = await this.findLinkIds(query.featured);
        const rawLinks = await this.findLinksByIds(linkIds);
    
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
    
      private async findLinkIds(ids : number[]) : Promise<number[]> {
        const result = await this.client.request(readItems('landing_page_links', {
          filter: {
            id: {
              _in: ids
            }
          }
        }));
    
        return result.map((joinRow) => joinRow.links_id);
      }
    
      private async findLinksByIds(ids: number[]): Promise<link[]> {
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