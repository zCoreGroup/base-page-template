import HeaderDataFetcher from "@/components/header/datafetcher";
import { LandingPageData, LandingPageQuery } from "./types";
import { HeaderQuery } from "@/components/header/types";
import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import { FeaturedLinkQuery } from "@/components/featuredlinks/types";

export default class LandingPageDataFetcher {

    private headerFetcher: HeaderDataFetcher;
    private featuredLinksFetcher: FeaturedLinksDataFetcher;

    constructor(headerFetcher: HeaderDataFetcher, featuredLinksFetcher: FeaturedLinksDataFetcher) {
        this.headerFetcher = headerFetcher;
        this.featuredLinksFetcher = featuredLinksFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {
        const headerQuery = {landingPageId: query.id} as HeaderQuery;
        const featuredLinksQuery = {landingPageId: query.id} as FeaturedLinkQuery;

        const headerData = await this.headerFetcher.fetch(headerQuery);
        const featuredLinksData = await this.featuredLinksFetcher.fetch(featuredLinksQuery);

        return {
            header: headerData,
            featuredLinks: featuredLinksData
        } as LandingPageData;
    }
}