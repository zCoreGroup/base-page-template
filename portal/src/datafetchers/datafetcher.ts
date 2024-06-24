import { createDirectus, graphql, DirectusClient } from '@directus/sdk';
import { getPortalConfig } from '../portalconfig';


interface DirectusSchema {
    // TODO: add collections
}


const portalConfig = getPortalConfig();


export abstract class DataFetcher {

    protected static directusClient : DirectusClient<DirectusSchema> = createDirectus<DirectusSchema>(portalConfig.directusUrl).with(graphql());

    abstract fetch<T>(): T;
}