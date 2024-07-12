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
    footer: string
    tagline: string | null;
    announcements: number[];
    featured: number[];
    documentation: number[];
}

export type Footer_page = {
    id: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    hours: string;
    feedback: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
    title: 1;
    location: number;
    flicker: string;
};

export type location_page = {
    id: number,
    sort: string,
    user_created: string
    date_created: string,
    user_updated: string,
    date_updated: string,
    name: string,
    address: string,
    coordinates: object
    city: string,
    zip: number,
    state: string,
    phone: string,
    email: string,

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

export type DirectusSchema = {
    landing_page: landing_page[];
    links: link[];
    landing_page_links: landing_page_links[];
    announcements: announcement[];
    landing_page_announcements: landing_page_announcements[];
    footer: Footer_page[];
    locations: location_page[];
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