import { LandingPageData, LandingPageQuery } from "./types";
import { FooterQuery } from "@/components/footer/types";
import { NavbarQuery } from "@/components/navbar/types";
import NavbarDataFetcher from "@/components/navbar/datafetcher";
import HeaderDataFetcher from "@/components/header/datafetcher";
import FooterDataFetcher from "@/components/footer/datafetcher";
import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { readItems } from "@directus/sdk";
import { DuplicateLandingPage, LandingPageNotFound } from "@/lib/errors";

export default class LandingPageDataFetcher extends DirectusDataFetcher {

    private navbarFetcher: NavbarDataFetcher;
    private headerFetcher: HeaderDataFetcher;
    private featuredLinksFetcher: FeaturedLinksDataFetcher;
    private footerFetcher: FooterDataFetcher;

    constructor(headerFetcher: HeaderDataFetcher, featuredLinksFetcher: FeaturedLinksDataFetcher, footerFetcher: FooterDataFetcher) {
        super()
        this.headerFetcher = headerFetcher;
        this.featuredLinksFetcher = featuredLinksFetcher;
        this.footerFetcher = footerFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {

        const navbarQuery = {landingPageId: query.slug} as NavbarQuery;
        const landingPage = await this.findLandingPageBySlug(query.slug);
        const footerQuery = {landingPageId: query.slug} as FooterQuery;

        const navbarData = await this.navbarFetcher.fetch(navbarQuery);
        const headerData = await this.headerFetcher.fetch(landingPage);
        const featuredLinksData = await this.featuredLinksFetcher.fetch(landingPage);
        const footerData = await this.footerFetcher.fetch(footerQuery);
        return {
            navbar: navbarData,
            header: headerData,
            featuredLinks: featuredLinksData,
            footer: footerData,
        } as LandingPageData;
    }

    async findLandingPageBySlug(slug: string): Promise<landing_page> {
        const result = await this.client.request(readItems('landing_page', {
            filter: {
                slug: {
                    _eq: slug
                }
            }
        }));

        if (result.length === 0) {
            throw new LandingPageNotFound();
        } else if (result.length > 1) {
            throw new DuplicateLandingPage();
        }
        return result[0];
    }
}
