import { FeaturedLinksData } from "@/components/featuredlinks/types";
import { HeaderData } from "@/components/header/types";
import { AnnouncementsData } from "@/components/announcements/types";
import { FooterData } from "@/components/footer/types";

export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
    footer: FooterData
}

export type LandingPageQuery = {
    slug: string;
}

