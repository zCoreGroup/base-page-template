import { DirectusDataFetcher, footer, landing_page, location } from '@/lib/directusdatafetcher'
import { FooterData } from '@/types'
import { readItems } from '@directus/sdk'
import DefaultFooterContentDataFetecher from './defaultFooterContentDataFetcher'

export default class FooterDataFetcher extends DirectusDataFetcher {
  private defaultFooterContentFetcher: DefaultFooterContentDataFetecher
  constructor(defaultFooterContentFetcher: DefaultFooterContentDataFetecher) {
    super()
    this.defaultFooterContentFetcher = defaultFooterContentFetcher
  }

  async fetch(landing_page?: landing_page): Promise<FooterData> {
    const defaultFooterData = await this.defaultFooterContentFetcher.fetch()

    let footer
    if (landing_page && landing_page.footer) {
      footer = await this.getFooter(landing_page.footer)
    } else {
      footer = await this.getFooter(defaultFooterData.footerId)
    }

    const location = await this.getLocation(footer.location)

    const baseMapImage = footer.image ? this.getFileUrl(footer.image) : ''

    return {
      streetAddress: location.address,
      city: location.city,
      state: location.state,
      zip: location.zip,
      phone: location.phone ?? '',
      email: location.email ?? '',
      informationTitle: footer.information,
      informationText: footer.information_text,
      linkFB: footer.facebook,
      linkX: footer.twitter,
      linkIG: footer.instagram,
      linkYT: footer.youtube,
      baseMapImage: baseMapImage,
      quickLinks: defaultFooterData.quickLinks,
      guardianPortal: defaultFooterData.portalLinks,
      feedback: defaultFooterData.feedback,
    }
  }

  async getFooter(id: string): Promise<footer> {
    const footer = await this.client.request(
      readItems('footer', {
        filter: {
          id: {
            _eq: id,
          },
        },
      })
    )
    return footer[0]
  }

  async getLocation(id: number): Promise<location> {
    const location = await this.client.request(
      readItems('locations', {
        filter: {
          id: {
            _eq: id,
          },
        },
      })
    )
    return location[0]
  }
}
