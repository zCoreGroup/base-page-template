import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { BannerData } from "@/types";

export default class BannerDataFetcher extends DirectusDataFetcher {

    async fetch(landingPage: landing_page): Promise<BannerData> {
        const { title, tagline, logo, mission, vision } = landingPage;
        const logoSrc = this.getFileUrl(logo);

        return {
            logoSrc: logoSrc,
            logoAlt: title,
            title: title.toUpperCase(),
            tagline: tagline ?? "",
            missionText: mission,
            visionText: vision
        }
    }
}