import { FeaturedLinksData } from "@/components/featuredlinks/types";
import { HeaderData } from "@/components/header/types";
import { AnnouncementsData } from "@/components/announcements/types";

export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
}

export type LandingPageQuery = {
    id: string;
}

