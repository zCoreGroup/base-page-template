import { DirectusDataFetcher, RawFooterLink } from '@/lib/directusdatafetcher'
import { FooterLink } from '@/types'
import { readItems, readSingleton } from '@directus/sdk'

export type DefaultFooterContent = {
  quickLinks: FooterLink[]
  portalLinks: FooterLink[]
  feedback: string
  footerId: string
}
export default class DefaultFooterContentDataFetecher extends DirectusDataFetcher {
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
    const labelsQuery = await this.client.request(
      readItems('labels', {
        filter: {
          name: {
            _eq: 'Default',
          },
        },
      })
    )
    const defaultLabel = labelsQuery[0]
    const footerLabelsQuery = await this.client.request(
      readItems('footer_labels', {
        filter: {
          labels_id: {
            _eq: defaultLabel.id,
          },
        },
      })
    )
    return footerLabelsQuery[0].footer_id
  }

  private mapRawLinksToFooterLink(rawLinks: RawFooterLink[]): FooterLink[] {
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
