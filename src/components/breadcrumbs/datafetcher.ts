import { DirectusDataFetcher, landing_page } from '@/lib/directusdatafetcher'
import { BreadCrumb, BreadCrumbData } from '@/types' 
import { readItems } from '@directus/sdk'

export default class BreadCrumbDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<BreadCrumbData> {
    const rawBreadCrumbs = await this.findLandingPageBreadCrumbsBySlug(query.slug)

    const links = rawBreadCrumbs.map((rawBreadCrumb: { slug: string }) => {
      return {
        text: rawBreadCrumb.slug,
        link: rawBreadCrumb.slug || '#',
      } as BreadCrumb
    })

    return {
      links: links,
    }
  }

  async findLandingPageBreadCrumbsBySlug(slug: string): Promise<landing_page[]> {
    const result = await this.client.request(
      readItems('landing_page', {
        filter: {
          slug: {
            _eq: slug,
          },
        },
      })
    )

    return result
  }
}
