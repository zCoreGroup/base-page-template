import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { NavbarData, NavbarQuery } from "./types";

export default class NavbarDataFetcher extends DirectusDataFetcher {
  async fetch(query: NavbarQuery): Promise<NavbarData> {
    return {
      logo: "/assets/guardian_one_logo_wordMark.png",
      logoAlt: "Logo",
      notificationsCount: 4,
      links: [
        { name: 'Doctrine', url: "https://www.starcom.spaceforce.mil/" },
        { name: 'News', url: "https://www.spaceforce.mil/News/" },
        { name: 'CSO Corner', url: "https://www.spaceforce.mil/About-Us/CSO-Leadership-Library/" },
        { name: 'Multimedia', url: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
      ],
      user: {
        name: "User Name",
        avatarUrl: "/assets/avatar.png",
      }
    };
  }
}
