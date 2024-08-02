import { LandingPageData, LandingPageQuery, LandingPageShort } from '@/types'
import NavbarDataFetcher from '@/components/navbar/datafetcher'
import BannerDataFetcher from '@/components/banner/datafetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import FeaturedLinksDataFetcher from '@/components/featured-links/dataFetcher'
import BreadCrumbDataFetcher from '@/components/breadcrumbs/datafetcher'
import { DirectusDataFetcher, landing_page } from '@/lib/directusdatafetcher'
import { readItems } from '@directus/sdk'
import { DuplicateLandingPage, LandingPageNotFound } from '@/lib/errors'
import AnnouncementsDataFetcher from '@/components/announcements/datafetcher'
import EventsDataFetcher from '@/components/events/datafetcher'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'
import { fallbackLandingPageData } from '@/lib/fallbackData'

export default class LandingPageDataFetcher extends DirectusDataFetcher {
  static instance: LandingPageDataFetcher

  private navbarFetcher: NavbarDataFetcher
  private breadCrumbFetcher: BreadCrumbDataFetcher
  private bannerFetcher: BannerDataFetcher
  private featuredLinksFetcher: FeaturedLinksDataFetcher
  private announcementsFetcher: AnnouncementsDataFetcher
  private eventsFetcher: EventsDataFetcher
  private footerFetcher: FooterDataFetcher

  constructor(
    navbarFetcher: NavbarDataFetcher,
    breadCrumbFetcher: BreadCrumbDataFetcher,
    bannerFetcher: BannerDataFetcher,
    featuredLinksFetcher: FeaturedLinksDataFetcher,
    announcementsFetcher: AnnouncementsDataFetcher,
    eventsFetcher: EventsDataFetcher,
    footerFetcher: FooterDataFetcher
  ) {
    super()
    this.bannerFetcher = bannerFetcher
    this.breadCrumbFetcher = breadCrumbFetcher
    this.featuredLinksFetcher = featuredLinksFetcher
    this.announcementsFetcher = announcementsFetcher
    this.eventsFetcher = eventsFetcher
    this.footerFetcher = footerFetcher
    this.navbarFetcher = navbarFetcher
  }

  async fetch(query: LandingPageQuery): Promise<LandingPageData> {
    try {
      const landingPage = await this.findLandingPageBySlug(query.slug)

      const [navbarData, breadCrumbData, bannerData, featuredLinksData, announcementsData, eventsData, footerData] =
        await Promise.all([
          this.navbarFetcher.fetch(landingPage),
          this.breadCrumbFetcher.fetch(landingPage),
          this.bannerFetcher.fetch(landingPage),
          this.featuredLinksFetcher.fetch(landingPage),
          this.announcementsFetcher.fetch(landingPage),
          this.eventsFetcher.fetch(landingPage),
          this.footerFetcher.fetch(landingPage),
        ])

      return {
        navbar: navbarData,
        breadcrumbs: breadCrumbData,
        banner: bannerData,
        featuredLinks: featuredLinksData,
        announcements: announcementsData,
        events: eventsData,
        footer: footerData,
      } as LandingPageData
    } catch (error) {
      console.error('Error fetching landing page data:', error)
      return fallbackLandingPageData
    }
  }

  async getAllShort(): Promise<LandingPageShort[]> {
    const apiCall = () => this.client.request(readItems('landing_page'))
    const result = await this.safeRequest(apiCall, [])
    return result.map(
      (landingPage) =>
        ({
          slug: landingPage.slug,
          title: landingPage.title,
        }) as LandingPageShort
    )
  }

  async findLandingPageBySlug(slug: string): Promise<landing_page> {
    const apiCall = () => this.client.request(
      readItems('landing_page', {
        filter: {
          slug: {
            _eq: slug,
          },
        },
      })
    )
    const result = await this.safeRequest(apiCall, [])

    if (result.length === 0) {
      throw new LandingPageNotFound()
    } else if (result.length > 1) {
      throw new DuplicateLandingPage()
    }
    return result[0]
  }

  static getInstance(): LandingPageDataFetcher {
    if (LandingPageDataFetcher.instance === undefined) {
      const navbarFetcher = new NavbarDataFetcher()
      const breadcrumbFetcher = new BreadCrumbDataFetcher()
      const bannerFetcher = new BannerDataFetcher()
      const defaultFooterContentFetcher = new DefaultFooterContentDataFetcher()
      const footerFetcher = new FooterDataFetcher(defaultFooterContentFetcher)
      const featuredLinksFetcher = new FeaturedLinksDataFetcher()
      const announcementsFetcher = new AnnouncementsDataFetcher()
      const eventsFetcher = new EventsDataFetcher()

      LandingPageDataFetcher.instance = new LandingPageDataFetcher(
        navbarFetcher,
        breadcrumbFetcher,
        bannerFetcher,
        featuredLinksFetcher,
        announcementsFetcher,
        eventsFetcher,
        footerFetcher
      )
    }
    return LandingPageDataFetcher.instance
  }
}
