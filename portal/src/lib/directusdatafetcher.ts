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
    articles: number[];
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

export type article = {
    id: number;
    status: string;
    sort: number | null;
    user_created: string;
    date_created: string;
    user_updated: string;
    category: string;
    title: string;
    body: string;
    published_date: string;
    slug: string;
    image: string | null;
    document: number;
    labels: string;
    comments: number[];
};

export type landing_page_articles = {
    id: number;
    landing_page_id : number;
    articles_id : number;
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
    articles: article[];
    landing_page_articles: landing_page_articles[];
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