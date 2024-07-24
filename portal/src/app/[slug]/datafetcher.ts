import { LandingPageData, LandingPageQuery, LandingPageShort } from "../../types";
import { FooterQuery } from "@/types";
import NavbarDataFetcher from "@/components/navbar/datafetcher";
import BannerDataFetcher from "@/components/banner/datafetcher";
import FooterDataFetcher from "@/components/footer/datafetcher";
import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import { readItems } from "@directus/sdk";
import { DuplicateLandingPage, LandingPageNotFound } from "@/lib/errors";
import AnnouncementsDataFetcher from "@/components/announcements/datafetcher";
import EventsDataFetcher from "@/components/events/datafetcher";

export default class LandingPageDataFetcher extends DirectusDataFetcher {

    static instance: LandingPageDataFetcher;

    private navbarFetcher: NavbarDataFetcher;
    private bannerFetcher: BannerDataFetcher;
    private featuredLinksFetcher: FeaturedLinksDataFetcher;
    private announcementsFetcher: AnnouncementsDataFetcher;
    private eventsFetcher: EventsDataFetcher;
    private footerFetcher: FooterDataFetcher;

    constructor(
        navbarFetcher: NavbarDataFetcher,
        bannerFetcher: BannerDataFetcher,
        featuredLinksFetcher: FeaturedLinksDataFetcher,
        announcementsFetcher: AnnouncementsDataFetcher,
        eventsFetcher: EventsDataFetcher,
        footerFetcher: FooterDataFetcher) {
        super()
        this.bannerFetcher = bannerFetcher;
        this.featuredLinksFetcher = featuredLinksFetcher;
        this.announcementsFetcher = announcementsFetcher;
        this.eventsFetcher = eventsFetcher;
        this.footerFetcher = footerFetcher;
        this.navbarFetcher = navbarFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {

        const landingPage = await this.findLandingPageBySlug(query.slug);
        const footerQuery = { landingPageId: query.slug } as FooterQuery;

        const [navbarData, bannerData, featuredLinksData, announcementsData, eventsData, footerData] = await Promise.all([
            this.navbarFetcher.fetch(landingPage),
            this.bannerFetcher.fetch(landingPage),
            this.featuredLinksFetcher.fetch(landingPage),
            this.announcementsFetcher.fetch(landingPage),
            this.eventsFetcher.fetch(landingPage),
            this.footerFetcher.fetch(footerQuery)
        ]);

        return {
            navbar: navbarData,
            banner: bannerData,
            featuredLinks: featuredLinksData,
            announcements: announcementsData,
            events: eventsData,
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
            const bannerFetcher = new BannerDataFetcher();
            const footerFetcher = new FooterDataFetcher();
            const featuredLinksFetcher = new FeaturedLinksDataFetcher();
            const announcementsFetcher = new AnnouncementsDataFetcher();
            const eventsFetcher = new EventsDataFetcher();

            LandingPageDataFetcher.instance = new LandingPageDataFetcher(navbarFetcher, bannerFetcher, featuredLinksFetcher, announcementsFetcher, eventsFetcher, footerFetcher);
        }
        return LandingPageDataFetcher.instance;
    }
}
