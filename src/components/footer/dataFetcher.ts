import { DirectusDataFetcher, footer, landing_page, location } from '@/lib/directusdatafetcher'
import { FooterData } from '@/types'
import { readItems } from '@directus/sdk'

export default class FooterDataFetcher extends DirectusDataFetcher {
  async fetch(landing_page: landing_page): Promise<FooterData> {
    const footer = await this.getFooter(landing_page.footer)
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
      quickLinks: [
        {
          name: 'Test1',
          url: 'https://google.com',
        },
        {
          name: 'Test2',
          url: 'https://google.com',
        },
      ],
      guardianPortal: [
        {
          name: 'Test1',
          url: 'https://yahoo.com',
        },
        {
          name: 'Tes2',
          url: 'https://google.com',
        },
      ],
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
