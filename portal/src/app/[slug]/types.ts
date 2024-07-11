import { FeaturedLinksData } from "@/components/featuredlinks/types";
import { HeaderData } from "@/components/header/types";
import { AnnouncementsData } from "@/components/announcements/types";
import { FooterData } from "@/components/footer/types";
import { NavbarData } from "@/components/navbar/types";
import { ServicesData } from "@/components/services/types";

export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
    footer: FooterData
    navbar: NavbarData
    services: ServicesData
}

export type LandingPageQuery = {
    slug: string;
}

export type LandingPageShort = {
    slug: string;
    title: string;
}

