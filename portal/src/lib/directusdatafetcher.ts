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
    events: number[];
    labels: number[];
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
};

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
};

export type landing_page_announcements = {
    id: number;
    landing_page_id : number;
    announcements_id : number;
};

export type label = {
    id: string;
    name: string;
};

export type schedule = {
    label: string;
    start_time: string;
};

export type event = {
    id: string;
    status: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    title: string;
    description: string;
    image: string;
    schedule: schedule;
    start_date: string;
    end_date: string;
    slug: string;
    labels: number[];
};

export type events_labels = {
    id: number;
    labels_id : string;
    events_id : string;
};

export type landing_page_labels = {
    id: number;
    landing_page_id : number;
    labels_id : string;
};

export type landing_page_events = {
    id: number;
    item : string;
    landing_page_id : number;
};

export type DirectusSchema = {
    landing_page: landing_page[];
    links: link[];
    landing_page_links: landing_page_links[];
    announcements: announcement[];
    landing_page_announcements: landing_page_announcements[];
    events: event[];
    landing_page_events_1: landing_page_events[];
    labels: label[];
    events_labels: events_labels[];
    landing_page_labels: landing_page_labels[];
};

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
};