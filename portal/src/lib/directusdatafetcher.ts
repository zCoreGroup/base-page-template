import { createDirectus, DirectusClient, rest, staticToken } from '@directus/sdk';
import { getPortalConfig } from './portalconfig';


interface DirectusSchema {
    // TODO: add collections
}


const portalConfig = getPortalConfig();


export class DirectusDataFetcher {

    protected static directusClient : DirectusClient<DirectusSchema> =
        createDirectus<DirectusSchema>(portalConfig.directusUrl)
        .with(staticToken(portalConfig.directusStaticToken))
        .with(rest());

}