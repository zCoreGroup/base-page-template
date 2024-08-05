import { DirectusDataFetcher, link } from '@/lib/directusdatafetcher'
import { FeaturedLinksData } from '@/types'
import { readItems, readSingleton } from '@directus/sdk'

export default class HomeFeaturedLinksDataFetcher extends DirectusDataFetcher {
  async fetch(): Promise<FeaturedLinksData> {
    const linkIds = await this.findLinkIds()
    const rawLinks = await this.findLinksByIds(linkIds)

    const links = rawLinks.map((rawLink) => {
      return {
        name: rawLink.name,
        url: rawLink.url,
        imageUrl: rawLink.image,
      }
    })

    return {
      links: links,
    }
  }

  private async findLinkIds(): Promise<number[]> {
    const result = await this.client.request(readSingleton('featured_links'))

    const featuredLinks = await this.client.request(
      readItems('featured_links_links', {
        filter: {
          id: {
            _in: result.links,
          },
        },
      })
    )

    return featuredLinks.map((joinRow) => joinRow.links_id)
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
