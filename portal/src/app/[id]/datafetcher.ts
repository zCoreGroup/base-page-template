import HeaderDataFetcher from "@/components/header/datafetcher";
import { LandingPageData, LandingPageQuery } from "./types";
import { HeaderQuery } from "@/components/header/types";
import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import { FeaturedLinkQuery } from "@/components/featuredlinks/types";
import { AnnouncementsQuery } from "@/components/announcements/types";
import AnnouncementsDataFetcher from "@/components/announcements/datafetcher";

export default class LandingPageDataFetcher {

    private headerFetcher: HeaderDataFetcher;
    private featuredLinksFetcher: FeaturedLinksDataFetcher;
    private announcementsFetcher: AnnouncementsDataFetcher;

    constructor(headerFetcher: HeaderDataFetcher, featuredLinksFetcher: FeaturedLinksDataFetcher, announcementsFetcher: AnnouncementsDataFetcher) {
        this.headerFetcher = headerFetcher;
        this.featuredLinksFetcher = featuredLinksFetcher;
        this.announcementsFetcher = announcementsFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {
        const headerQuery = {landingPageId: query.id} as HeaderQuery;
        const featuredLinksQuery = {landingPageId: query.id} as FeaturedLinkQuery;
        const announcementsQuery = {landingPageId: query.id} as AnnouncementsQuery;

        const headerData = await this.headerFetcher.fetch(headerQuery);
        const featuredLinksData = await this.featuredLinksFetcher.fetch(featuredLinksQuery);
        const announcementsData = await this.announcementsFetcher.fetch(announcementsQuery);

        return {
            header: headerData,
            featuredLinks: featuredLinksData,
            announcements: announcementsData,
        } as LandingPageData;
    }
}