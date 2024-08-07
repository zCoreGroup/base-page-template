import { DirectusDataFetcher, RawFooterLink } from '@/lib/directusdatafetcher'
import { FooterLink } from '@/types'
import { readItems, readSingleton } from '@directus/sdk'

export type DefaultFooterContent = {
  quickLinks: FooterLink[]
  portalLinks: FooterLink[]
  feedback: string
  footerId: string
}
export default class DefaultFooterContentDataFetcher extends DirectusDataFetcher {
  async fetch(): Promise<DefaultFooterContent> {
    return {
      quickLinks: await this.getQuickLinks(),
      portalLinks: await this.getPortalLinks(),
      feedback: await this.getFeedback(),
      footerId: await this.getDefaultFooterId(),
    } as DefaultFooterContent
  }

  async getQuickLinks(): Promise<FooterLink[]> {
    const rawLinks = await this.client.request(readItems('quick_links'))
    return this.mapRawLinksToFooterLink(rawLinks)
  }

  async getPortalLinks(): Promise<FooterLink[]> {
    const rawLinks = await this.client.request(readItems('portal_links'))
    return this.mapRawLinksToFooterLink(rawLinks)
  }

  async getFeedback(): Promise<string> {
    const rawFeedback = await this.client.request(readSingleton('feedback'))
    return rawFeedback.feedback
  }

  async getDefaultFooterId(): Promise<string> {
    const footers = await this.client.request(
      readItems('footer', {
        filter: {
          default: {
            _eq: true,
          },
        },
      })
    )
    const defaultFooter = footers[0]
    return defaultFooter.id
  }

  public mapRawLinksToFooterLink(rawLinks: RawFooterLink[]): FooterLink[] {
    return rawLinks.map(
      (rawLink: RawFooterLink) =>
        ({
          name: rawLink.name,
          url: rawLink.url,
          openInNew: rawLink.open_in_new ? rawLink.open_in_new === '1' : false,
        }) as FooterLink
    )
  }
}
