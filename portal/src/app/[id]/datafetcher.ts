import { LandingPageData, LandingPageQuery } from "./types";
import { HeaderQuery } from "@/components/header/types";
import { FeaturedLinkQuery } from "@/components/featuredlinks/types";
import { FooterQuery } from "@/components/footer/types";
import HeaderDataFetcher from "@/components/header/datafetcher";
import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import FooterDataFetcher from "@/components/footer/datafetcher";



export default class LandingPageDataFetcher {

    private headerFetcher: HeaderDataFetcher;
    private featuredLinksFetcher: FeaturedLinksDataFetcher;
    private footerFetcher: FooterDataFetcher;

    constructor(headerFetcher: HeaderDataFetcher, featuredLinksFetcher: FeaturedLinksDataFetcher, footerFetcher: FooterDataFetcher,) {
        this.headerFetcher = headerFetcher;
        this.featuredLinksFetcher = featuredLinksFetcher;
        this.footerFetcher = footerFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {
        const headerQuery = {landingPageId: query.id} as HeaderQuery;
        const featuredLinksQuery = {landingPageId: query.id} as FeaturedLinkQuery;
        const footerQuery = {landingPageId: query.id} as FooterQuery;

        const headerData = await this.headerFetcher.fetch(headerQuery);
        const featuredLinksData = await this.featuredLinksFetcher.fetch(featuredLinksQuery);
        const footerData = await this.headerFetcher.fetch(footerQuery);

        return {
            header: headerData,
            featuredLinks: featuredLinksData,
            footer: footerData,
        } as unknown as LandingPageData;
    }
}