import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { HeaderData } from "./types";

export default class HeaderDataFetcher extends DirectusDataFetcher {


    async fetch(query: landing_page): Promise<HeaderData> {
        const { title, tagline, logo } = query;
        const logoSrc = this.getFileUrl(logo);

        return {
            logoSrc: logoSrc,
            logoAlt: title,
            title: title,
            tagline: tagline ?? "",
            missionText: "Provide agile responsive and resilient spaceport, test range, and installation capabilities for the nation",
            visionText: "Unconstrained space launch and test event capacity from the Department of the Air Force’s base of choice"
        }
    }
}