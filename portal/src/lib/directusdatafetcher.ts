import { createDirectus, rest, RestClient, staticToken } from '@directus/sdk';
import { getPortalConfig } from './portalconfig';



export type landing_page = {
    id: number;
    status: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    logo: string;
    title: string;
    description: string;
    slug: string;
    mission: string;
    vision: string;
    tagline: string | null;
    announcements: number[];
    featured: number[];
    documentation: number[];
    base_events: number[];
}

export type link = {
    id: number;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    name: string;
    url: string;
    description: string;
    image: string;
};

export type landing_page_links = {
    id: number;
    landing_page_id : number;
    links_id : number;
}

export type announcement = {
    id: number;
    landing_page_id : number;
    announcements_id : number;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    title: string;
    description: string;
    status: string;
    image: string;
    body: string;
}

export type landing_page_announcements = {
    id: number;
    landing_page_id : number;
    announcements_id : number;
}

export type base_event = {
    id: number;
    landing_page_id : number;
    base_events_id : number;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    title: string;
    description: string;
}

export type landing_page_base_events = {
    id: number;
    landing_page_id : number;
    base_events_id : number;
}

export type DirectusSchema = {
    landing_page: landing_page[];
    links: link[];
    landing_page_links: landing_page_links[];
    announcements: announcement[];
    landing_page_announcements: landing_page_announcements[];
    base_events: base_event[];
    landing_page_base_events: landing_page_base_events[];
}

const portalConfig = getPortalConfig();

export class DirectusDataFetcher {

    private static directusClient = createDirectus<DirectusSchema>(portalConfig.directusUrl)
        .with(staticToken(portalConfig.directusStaticToken))
        .with(rest());

    get client(): RestClient<DirectusSchema> {
        return DirectusDataFetcher.directusClient;
    }

    getFileUrl(uuid: string): string {
        return `/api/file-proxy/?uuid=${uuid}`;
    }
}