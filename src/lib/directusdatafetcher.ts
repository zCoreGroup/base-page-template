import { createDirectus, rest, RestClient, staticToken } from '@directus/sdk'
import { getPortalConfig } from './portalconfig'
import { wrapDirectusCall } from './errorHandling'
import { fallbackDirectusSchema } from './fallbackData'

// ... (keep existing type definitions)

const portalConfig = getPortalConfig()

export class DirectusDataFetcher {
  private static directusClient = createDirectus<DirectusSchema>(portalConfig.directusUrl)
    .with(staticToken(portalConfig.directusStaticToken))
    .with(rest())

  get client(): RestClient<DirectusSchema> {
    return DirectusDataFetcher.directusClient
  }

  getFileUrl(uuid: string): string {
    return `/api/file-proxy/?uuid=${uuid}`
  }

  async safeRequest<T>(apiCall: () => Promise<T>, fallbackData: T): Promise<T> {
    return wrapDirectusCall(apiCall, fallbackData, this.client);
  }
}

// Update other methods in this file to use safeRequest
// For example:

export default class LandingPageDataFetcher extends DirectusDataFetcher {
  // ... (other methods)

  async findLandingPageBySlug(slug: string): Promise<landing_page> {
    const apiCall = () => this.client.request(
      readItems('landing_page', {
        filter: {
          slug: {
            _eq: slug,
          },
        },
      })
    );

    const result = await this.safeRequest(apiCall, [fallbackDirectusSchema.landing_page]);

    if (result.length === 0) {
      throw new LandingPageNotFound();
    } else if (result.length > 1) {
      throw new DuplicateLandingPage();
    }
    return result[0];
  }

  // ... (update other methods similarly)
}

// Update other classes in this file similarly
