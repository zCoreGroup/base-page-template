 
import { DirectusDataFetcher, landing_page } from "@/lib/directusdatafetcher";
import {BreadCrumbData } from "@/types";

export default class BreadCrumbFetcher extends DirectusDataFetcher {

    async fetch(landingPage: landing_page): Promise<BreadCrumbData> {
        const { breadcrumb, breadcrumbLnk } = landingPage;

        return {
            links: breadcrumb.map((item: string, index: number) => ({
                text: item,
                link: breadcrumbLnk[index] || '#'
            })),
        }
    }
}