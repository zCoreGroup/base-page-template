import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { NavbarData, NavbarQuery } from "./types";

export default class NavbarDataFetcher extends DirectusDataFetcher {
  async fetch(query: NavbarQuery): Promise<NavbarData> {
    return {
      logo: "/assets/guardian_one_logo_wordMark.png",
      logoAlt: "Logo",
      doctrine: "Doctrine",
      news: "News",
      csoCorner: "CSO Corner",
      multimedia: "Multimedia",
      notificationsCount: 4,
    };
  }
}
