import { FeaturedLinksData } from "@/components/featuredlinks/types";
import { HeaderData } from "@/components/header/types";
import { AnnouncementsData } from "@/components/announcements/types";
import { FooterData } from "@/components/footer/types";
import { NavbarData } from "@/components/navbar/types";

export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
    footer: FooterData
    navbar: NavbarData
}

export type LandingPageQuery = {
    slug: string;
}

