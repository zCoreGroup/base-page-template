import { LandingPageData, LandingPageQuery, LandingPageShort } from "./types";
import { FooterQuery } from "@/components/footer/types";
import NavbarDataFetcher from "@/components/navbar/datafetcher";
import HeaderDataFetcher from "@/components/header/datafetcher";
import FooterDataFetcher from "@/components/footer/datafetcher";
import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { readItems } from "@directus/sdk";
import { DuplicateLandingPage, LandingPageNotFound } from "@/lib/errors";
import AnnouncementsDataFetcher from "@/components/announcements/datafetcher";

export default class LandingPageDataFetcher extends DirectusDataFetcher {

    static instance: LandingPageDataFetcher;

    private navbarFetcher: NavbarDataFetcher;
    private headerFetcher: HeaderDataFetcher;
    private featuredLinksFetcher: FeaturedLinksDataFetcher;
    private announcementsFetcher: AnnouncementsDataFetcher;
    private footerFetcher: FooterDataFetcher;

    constructor(navbarFetcher: NavbarDataFetcher, headerFetcher: HeaderDataFetcher, featuredLinksFetcher: FeaturedLinksDataFetcher, announcementsFetcher: AnnouncementsDataFetcher, footerFetcher: FooterDataFetcher) {
        super()
        this.headerFetcher = headerFetcher;
        this.featuredLinksFetcher = featuredLinksFetcher;
        this.announcementsFetcher = announcementsFetcher;
        this.footerFetcher = footerFetcher;
        this.navbarFetcher = navbarFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {

        const landingPage = await this.findLandingPageBySlug(query.slug);
        const footerQuery = { landingPageId: query.slug } as FooterQuery;

        const [navbarData, headerData, featuredLinksData, announcementsData, footerData] = await Promise.all([
            this.navbarFetcher.fetch(landingPage),
            this.headerFetcher.fetch(landingPage),
            this.featuredLinksFetcher.fetch(landingPage),
            this.announcementsFetcher.fetch(landingPage),
            this.footerFetcher.fetch(footerQuery)
        ]);

        return {
            navbar: navbarData,
            header: headerData,
            featuredLinks: featuredLinksData,
            announcements: announcementsData,
            footer: footerData,
        } as LandingPageData;
    }

    async getAllShort(): Promise<LandingPageShort[]> {
        const result = await this.client.request(readItems('landing_page'));
        const short = {}
        return result.map((landingPage) => ({
            slug: landingPage.slug,
            title: landingPage.title
        } as LandingPageShort));
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

    static getInstance(): LandingPageDataFetcher {
        if (LandingPageDataFetcher.instance === undefined) {
            const navbarFetcher = new NavbarDataFetcher();
            const headerFetcher = new HeaderDataFetcher();
            const footerFetcher = new FooterDataFetcher();
            const featuredLinksFetcher = new FeaturedLinksDataFetcher();
            const announcementsFetcher = new AnnouncementsDataFetcher();

            LandingPageDataFetcher.instance = new LandingPageDataFetcher(navbarFetcher, headerFetcher, featuredLinksFetcher, announcementsFetcher, footerFetcher);
        }
        return LandingPageDataFetcher.instance;
    }
}
