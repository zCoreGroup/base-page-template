import { landing_page } from "@/lib/directusdatafetcher";

export type HeaderData = {
    logoSrc: string;
    logoAlt: string;
    title: string;
    tagline: string;
    missionText: string;
    visionText: string;
};

export type HeaderQuery = {
    landingPage: landing_page
}