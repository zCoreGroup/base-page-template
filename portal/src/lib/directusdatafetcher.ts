import { createDirectus, rest, RestClient, staticToken } from '@directus/sdk';
import { getPortalConfig } from './portalconfig';


interface DirectusSchema {
    // TODO: add collections
}


const portalConfig = getPortalConfig();


export class DirectusDataFetcher {

    private static directusClient = createDirectus<DirectusSchema>(portalConfig.directusUrl)
        .with(staticToken(portalConfig.directusStaticToken))
        .with(rest());

    get client(): RestClient<DirectusSchema> {
        return DirectusDataFetcher.directusClient;
    }
}