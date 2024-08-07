import { DirectusDataFetcher } from '@/lib/directusdatafetcher'
import { HeroBanner, HeroBannerData } from '@/types'
import { readItems } from '@directus/sdk'

export default class HeroBannerDataFetcher extends DirectusDataFetcher {
  async fetch(): Promise<HeroBannerData> {
    const rawHeroBannerData = await this.findHeroBannerImages()

    const heroBanner = rawHeroBannerData.map((rawHeroBanner) => {
      return {
        id: rawHeroBanner.id,
        source: rawHeroBanner.source,
        title: rawHeroBanner.title,
        heading: rawHeroBanner.heading,
        subheading: rawHeroBanner.subheading,
        imgCaption: rawHeroBanner.imgCaption,
      } as HeroBanner
    })

    return { images: heroBanner }
  }

  async findHeroBannerImages(): Promise<HeroBanner[]> {
    const result = await this.client.request(
      readItems('hero_banner', {
        filter: {
          slug: {},
        },
        fields: ['id', 'source', 'title', 'heading', 'subheading', 'imgCaption'],
      })
    )

    return result
  }
}
