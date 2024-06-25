import HeaderDataFetcher from "@/components/header/datafetcher";
import { LandingPageData, LandingPageQuery } from "./types";
import { HeaderQuery } from "@/components/header/types";

export default class LandingPageDataFetcher {

    private headerFetcher: HeaderDataFetcher;

    constructor(headerFetcher: HeaderDataFetcher) {
        this.headerFetcher = headerFetcher;
    }

    async fetch(query: LandingPageQuery): Promise<LandingPageData> {
        const headerQuery = {landingPageId: query.id} as HeaderQuery;

        const headerData = await this.headerFetcher.fetch(headerQuery);

        return {
            header: headerData
        } as LandingPageData;
    }
}