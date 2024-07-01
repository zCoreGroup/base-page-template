import { DirectusDataFetcher, landing_page, link } from "@/lib/directusdatafetcher";
import { NavbarData, NavbarQuery } from "./types";
import { readItems } from "@directus/sdk";

export default class NavbarDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<NavbarData> {

    const rawLinks = await this.findLinksByIds(query.navbarLinks);

    const links = rawLinks.map((rawLink) => {
      return {
        name: rawLink.name,
        url: rawLink.url
      }
    });

    return {
      logo: "/assets/guardian_one_logo_wordMark.png",
      logoAlt: "Logo",
      notificationsCount: 4,
      links: links,
      user: {
        name: "User Name",
        avatarUrl: "/assets/avatar.png",
      }
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
