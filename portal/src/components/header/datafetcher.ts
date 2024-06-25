import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { HeaderData, HeaderQuery } from "./types";

export default class HeaderDataFetcher extends DirectusDataFetcher {

    async fetch(query: HeaderQuery): Promise<HeaderData> {
        return {
            logoSrc: "https://www.vandenberg.spaceforce.mil/portals/18/images/SLD30_logo.png",
            logoAlt: "Vandenberg Space Base logo",
            title: "Vandenberg Space Base",
            subtitle: "Capacity - Agility - Responsiveness - Resilience",
            missionText: "Provide agile responsive and resilient spaceport, test range, and installation capabilities for the nation",
            visionText: "Unconstrained space launch and test event capacity from the Department of the Air Force’s base of choice"
        }
    }
}