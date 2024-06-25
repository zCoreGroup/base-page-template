import { LandingPageData, LandingPageQuery } from "./types";

export default class LandingPageDataFetcher {

    fetch(query: LandingPageQuery): LandingPageData {
        return {
            title: query.id,
            content: query.id
        } as LandingPageData;
    }
}