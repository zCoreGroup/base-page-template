import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { AnnouncementsQuery, AnnouncementsData } from "./types";

export default class AnnouncementsDataFetcher extends DirectusDataFetcher {
  async fetch(query: AnnouncementsQuery): Promise<AnnouncementsData> {
    return {
      name: "Announcements",
      items: [
        { name: "Hard at Work: 30th Civil Engineer Squadron Replaces Water Lines to VSFB Aquatic Center", description: "30th Civil Engineer Squadron members work together to loosen bolts on a water line at the Vandenberg Aquatic Center at Vandenberg Space Force Base, Calif., June 17, 2024. 30th CES is diligently working to replace the water lines, which will allow the aquatic center to re-open for the summer months. (U.S. Space Force photo by Senior Airman Kadielle Shaw)", imageSrc: "https://media.defense.gov/2024/Jan/10/2003374148/2000/2000/0/240110-X-IN231-1001.JPG" },
        { name: "Spaceport Spotlight: 30th Comptroller Squadron", description: "Senior Airman Roger Fortson Candlelight Vigil Held at VSFB", imageSrc: "https://d1ldvf68ux039x.cloudfront.net/thumbs/frames/video/2406/927446/DOD_110381672.0000001/2000w_q95.jpg" },
        { name: "Senior Airman Roger Fortson Candlelight Vigil Held at VSFB", description: "In this iteration of the Spaceport Spotlight, Jescha McIntosh, 30th Comptroller Squadron job order manager, speaks on the mission of 30 CPTS and their role at the West Coast Spaceport and Test Range, and assuring access to space. (U.S. Space Force Video by Senior Airman Ryan Quijas)", imageSrc: "https://media.defense.gov/2024/Jun/17/2003487623/2000/2000/0/240617-X-XI961-1035.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/Jun/10/2003482460/2000/2000/0/240607-X-XI961-1007.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/Jun/10/2003482489/2000/2000/0/240529-X-XI961-1048.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/Jun/06/2003480560/2000/2000/0/240606-X-XI961-1002.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/Jun/01/2003476761/2000/2000/0/240601-X-HB409-1001.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/May/27/2003472936/2000/2000/0/240527-X-VJ291-1039.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/May/27/2003472940/2000/2000/0/240527-X-BS524-1003.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/May/27/2003472926/2000/2000/0/240527-X-HB409-1005.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/May/27/2003472921/2000/2000/0/240527-X-GJ070-1004.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/Jan/10/2003374148/2000/2000/0/240110-X-IN231-1001.JPG" },
        { name: "", description: "", imageSrc: "https://media.defense.gov/2024/Jun/17/2003487623/2000/2000/0/240617-X-XI961-1035.JPG" },
      ],
    };
  }
}
