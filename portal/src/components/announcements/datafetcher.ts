import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { AnnouncementsQuery, AnnouncementsData } from "./types";

export default class AnnouncementsDataFetcher extends DirectusDataFetcher {
  async fetch(query: AnnouncementsQuery): Promise<AnnouncementsData> {
    return {
      name: "Announcements",
      items: [
        {
          name: "Space Launch Delta 30 Strategic Objectives",
          description: "In just three short years since changing its name, Space Launch Delta 30 has evolved into a dynamic power projection platform with plans for acceleration. In 2024, the installation’s focus will be on refining the capacity, agility, responsiveness, and resiliency across all SLD 30 responsibilities.",
          imageSrc: "https://media.defense.gov/2024/Jan/10/2003374148/2000/2000/0/240110-X-IN231-1001.JPG"
        },
        {
          name: "MINOTAUR I ROCKET LAUNCHES FROM VSFB",
          description: "A Minotaur I rocket carrying an unarmed Mk21A reentry vehicle launches from Vandenberg Space Force Base, Calif., at 11:01 p.m. June 17, 2024. After attaining full operational capability, the Mk21A RV will be integrated on the nation’s intercontinental ballistic missile weapon system. The Mk21A program is currently in early development and overseen by the Air Force Nuclear Weapons Center. (U.S. Space Force photo by Senior Airman Kadielle Shaw)",
          imageSrc: "https://media.defense.gov/2024/Jun/28/2003494420/2000/2000/0/240617-X-XI961-1074.JPG"
        },
        {
          name: "Hard at Work: 30th Civil Engineer Squadron Replaces Water Lines to VSFB Aquatic Center",
          description: "30th Civil Engineer Squadron members work together to loosen bolts on a water line at the Vandenberg Aquatic Center at Vandenberg Space Force Base, Calif., June 17, 2024. 30th CES is diligently working to replace the water lines, which will allow the aquatic center to re-open for the summer months. (U.S. Space Force photo by Senior Airman Kadielle Shaw)",
          imageSrc: "https://media.defense.gov/2024/Jun/17/2003487623/2000/2000/0/240617-X-XI961-1035.JPG"
        },
        {
          name: "Spaceport Spotlight: 30th Comptroller Squadron",
          description: "In this iteration of the Spaceport Spotlight, Jescha McIntosh, 30th Comptroller Squadron job order manager, speaks on the mission of 30 CPTS and their role at the West Coast Spaceport and Test Range, and assuring access to space. (U.S. Space Force Video by Senior Airman Ryan Quijas)",
          imageSrc: "https://d1ldvf68ux039x.cloudfront.net/thumbs/frames/video/2406/927446/DOD_110381672.0000001/2000w_q95.jpg"
        },
        {
          name: "Senior Airman Roger Fortson Candlelight Vigil Held at VSFB",
          description: "Vandenberg service members and civilians join at the Base Chapel for a candlelight vigil in honor of U.S. Air Force Senior Airman Roger Fortson at Vandenberg Space Force Base, Calif., June 7, 2024. A candlelight vigil serves as a solemn gathering to honor and remember a significant person or event. (U.S. Space Force photo by Senior Airman Kadielle Shaw)",
          imageSrc: "https://media.defense.gov/2024/Jun/10/2003482460/2000/2000/0/240607-X-XI961-1007.JPG"
        },
        {
          name: "VSFB Gas Station Re-opening Ceremony",
          description: "Space Launch Delta 30 leadership and VSFB members join for a ribbon cutting ceremony for the re-opening of the base gas station at Vandenberg Space Force Base, Calif., May 29, 2024. After a temporary shutdown for reconstruction, the gas station re-opened with fully functional gas pumps for VSFB members. (U.S. Space Force photo by Senior Airman Kadielle Shaw)",
          imageSrc: "https://media.defense.gov/2024/Jun/10/2003482489/2000/2000/0/240529-X-XI961-1048.JPG"
        },
        {
          name: "80th D-Day Anniversary Retreat Ceremony at VSFB",
          description: "U.S. Space Force 532nd Training Squadron students, 533rd Training Squadron students, and 1st Delta Operations Squadron students salute the U.S. flag during a D-Day 80th anniversary remembrance retreat on Vandenberg Space Force Base, Calif., June 6, 2024. D-Day marks a historical moment in World War II as the largest seaborne invasion in history. (U.S. Space Force photo by Senior Airman Kadielle Shaw)",
          imageSrc: "https://media.defense.gov/2024/Jun/06/2003480560/2000/2000/0/240606-X-XI961-1002.JPG"
        },
        {
          name: "Santa Maria Elks Rodeo Parade 2024",
          description: "U.S. Space Force Col. Mark Shoemaker, Space Launch Delta 30 commander, and his wife Mary, wave to the crowd at the Santa Maria Elks Rodeo Parade in Santa Maria, Calif., June 1, 2024. VSFB leadership showed support for the surrounding community by participating in events through the weekend, commemorating 81 years of the Elks Rodeo. (U.S. Space Force photo by Senior Airman Ryan Quijas)",
          imageSrc: "https://media.defense.gov/2024/Jun/01/2003476761/2000/2000/0/240601-X-HB409-1001.JPG"
        },
        {
          name: "UNARMED MINUTEMAN III TEST LAUNCH TO SHOWCASE READINESS OF U.S. NUCLEAR FORCE’S SAFE, EFFECTIVE DETERRENT",
          description: "Vandenberg Guardians and Airmen will support two separate operational test launches of an Air Force Global Strike Command unarmed Minuteman III intercontinental ballistic missile off the Vandenberg Test Range scheduled for the first week of June.",
          imageSrc: ""
        },
        {
          name: "Orcutt Memorial Day 2024",
          description: "U.S. Air Force Col. Michael Jewell, Space Launch Delta 30 vice commander, gives a speech during a Memorial Day ceremony in Orcutt, Calif., May 27, 2024. Team Vandenberg leadership participated in Memorial Day ceremonies alongside community members in Lompoc, Santa Maria, Solvang, Guadalupe and Santa Barbara. Collectively they paid tribute to the fallen heroes who made the ultimate sacrifice in service and defense of our nation. (U.S. Space Force photo by Senior Airman Joshua LeRoi)",
          imageSrc: "https://media.defense.gov/2024/May/27/2003472936/2000/2000/0/240527-X-VJ291-1039.JPG"
        },
        {
          name: "Solvang Memorial Day 2024",
          description: "U.S. Space Force Col. Bryan Titus, Space Launch Delta 30 vice commander, gives a speech during the Solvang Memorial Day Ceremony at Solvang, Calif. May 27, 2024. Memorial Day, originally known as Decoration Day, commemorates the men and women who made the ultimate sacrifice in their service to the United States. (U.S. Space Force photo by Airman 1st Class Olga Houtsma)",
          imageSrc: "https://media.defense.gov/2024/May/27/2003472940/2000/2000/0/240527-X-BS524-1003.JPG"
        },
        {
          name: "Santa Maria Memorial Day 2024",
          description: "U.S. Space Force Col. Mark Shoemaker, Space Launch Delta 30 commander, gives a speech during a Memorial Day ceremony in Santa Maria, Calif., May 27, 2024. Team Vandenberg leadership participated in Memorial Day ceremonies alongside community members in Lompoc, Santa Maria, Solvang, Guadalupe and Santa Barbara. Collectively they paid tribute to the fallen heroes who made the ultimate sacrifice in service and defense of our nation. (U.S. Space Force photo by Senior Airman Ryan Quijas)",
          imageSrc: "https://media.defense.gov/2024/May/27/2003472926/2000/2000/0/240527-X-HB409-1005.JPG"
        },
        {
          name: "Guadalupe Memorial Day Ceremony 2024",
          description: "U.S. Space Force Col. Phillip Verroco, Space Delta 5 commander and Combined Space Operations Center director, delivers a speech during a Memorial Day event at Guadalupe Cemetery in Guadalupe, Calif., May 27, 2024. Verroco spoke on continuing to educate others on the sacrifices that were made so that the Nation can continue to enjoy the freedoms granted in the constitution. (U.S. Space Force photo by Senior Airman Tiarra Sibley)",
          imageSrc: "https://media.defense.gov/2024/May/27/2003472921/2000/2000/0/240527-X-GJ070-1004.JPG"
        }        
      ],
    };
  }
}
