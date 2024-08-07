import { DirectusDataFetcher, landing_page, link } from '@/lib/directusdatafetcher'
import { FeaturedLinksData } from '@/types'
import { readItems } from '@directus/sdk'

export default class FeaturedLinksDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<FeaturedLinksData> {
    const linkIds = await this.findLinkIds(query.featured)
    const rawLinks = await this.findLinksByIds(linkIds)

    const links = rawLinks.map((rawLink) => {
      return {
        name: rawLink.name,
        url: rawLink.url,
        imageUrl: !!rawLink.image ? this.getFileUrl(rawLink.image) : '',
      }
    })

    return {
      links: links,
    }
  }

  private async findLinkIds(ids: number[]): Promise<number[]> {
    const result = await this.client.request(
      readItems('landing_page_links', {
        filter: {
          id: {
            _in: ids,
          },
        },
      })
    )

    return result.map((joinRow) => joinRow.links_id)
  }

  private async findLinksByIds(ids: number[]): Promise<link[]> {
    const result = await this.client.request(
      readItems('links', {
        filter: {
          id: {
            _in: ids,
          },
        },
      })
    )

    return result
  }
}
