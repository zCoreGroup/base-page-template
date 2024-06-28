import { FeaturedLinksData } from "@/components/featuredlinks/types";
import { HeaderData } from "@/components/header/types";
import { FooterData } from "@/components/footer/types";

export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    footer: FooterData
}

export type LandingPageQuery = {
    id: string;
}
