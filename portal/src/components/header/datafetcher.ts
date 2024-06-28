import { DirectusDataFetcher } from "@/lib/directusdatafetcher";
import { HeaderData, HeaderQuery } from "./types";

export default class HeaderDataFetcher extends DirectusDataFetcher {

    async fetch(query: HeaderQuery): Promise<HeaderData> {
        const { title, tagline, logo, slug } = query.landingPage;
        const logoSrc = `/api/file-proxy/?uuid=${logo}`;

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