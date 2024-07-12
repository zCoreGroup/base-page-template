import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { HeaderData } from "@/types";

export default class HeaderDataFetcher extends DirectusDataFetcher {

    async fetch(landingPage: landing_page): Promise<HeaderData> {
        const { title, tagline, logo, mission, vision } = landingPage;
        const logoSrc = this.getFileUrl(logo);

        return {
            logoSrc: logoSrc,
            logoAlt: title,
            title: title,
            tagline: tagline ?? "",
            missionText: mission,
            visionText: vision
        }
    }
}