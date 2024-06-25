import { FeaturedLinksData } from "@/components/featuredlinks/types";
import { HeaderData } from "@/components/header/types";

export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
}

export type LandingPageQuery = {
    id: string;
}
