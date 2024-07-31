import { DirectusDataFetcher, footer, landing_page, location, RawFooterLink } from '@/lib/directusdatafetcher'
import { FooterData, FooterLink } from '@/types'
import { readItems } from '@directus/sdk'
import DefaultFooterContentDataFetecher from './defaultFooterContentDataFetcher'

export default class FooterDataFetcher extends DirectusDataFetcher {
  private defaultFooterContentFetcher: DefaultFooterContentDataFetecher
  constructor(defaultFooterContentFetcher: DefaultFooterContentDataFetecher) {
    super()
    this.defaultFooterContentFetcher = defaultFooterContentFetcher
  }

  async fetch(landing_page: landing_page): Promise<FooterData> {
    const footer = await this.getFooter(landing_page.footer)
    const location = await this.getLocation(footer.location)
    const footerLinks = await this.defaultFooterContentFetcher.fetch()

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
      quickLinks: footerLinks.quickLinks,
      guardianPortal: footerLinks.portalLinks,
      feedback: footerLinks.feedback,
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
