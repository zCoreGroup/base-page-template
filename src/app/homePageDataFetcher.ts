import { DirectusDataFetcher } from '@/lib/directusdatafetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import HeroBannerDataFetcher from '@/components/herobanner/dataFetcher'
import { HomePageData } from '@/types'
import HomeFeaturedLinksDataFetcher from '@/components/home-featured-links/homeFeaturedLinksDataFetcher'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'
import NavbarDataFetcher from '@/components/navbar/navbarDataFetcher'

export default class HomePageDataFetcher extends DirectusDataFetcher {
  static instance: HomePageDataFetcher

  private navbarFetcher: NavbarDataFetcher
  private heroBannerFetcher: HeroBannerDataFetcher
  private featuredLinksFetcher: HomeFeaturedLinksDataFetcher
  private footerFetcher: FooterDataFetcher

  constructor(
    navbarFetcher: NavbarDataFetcher,
    heroBannerFetcher: HeroBannerDataFetcher,
    featuredLinksDataFetcher: HomeFeaturedLinksDataFetcher,
    footerFetcher: FooterDataFetcher
  ) {
    super()
    this.navbarFetcher = navbarFetcher
    this.heroBannerFetcher = heroBannerFetcher
    this.featuredLinksFetcher = featuredLinksDataFetcher
    this.footerFetcher = footerFetcher
  }

  async fetch(): Promise<HomePageData> {
    try {
      const [navbarData, heroBannerData, featuredLinksData, footerData] = await Promise.all([
        this.fetchWithTimeout(this.navbarFetcher.fetch()),
        this.fetchWithTimeout(this.heroBannerFetcher.fetch()),
        this.fetchWithTimeout(this.featuredLinksFetcher.fetch()),
        this.fetchWithTimeout(this.footerFetcher.fetch()),
      ])

      return {
        navbar: navbarData,
        heroBanner: heroBannerData,
        featuredLinks: featuredLinksData,
        footer: footerData,
      } as HomePageData
    } catch (error) {
      console.error('Error fetching home page data', error)
      throw error
    }
  }

  static getInstance(): HomePageDataFetcher {
    if (HomePageDataFetcher.instance == undefined) {
      const navbarFetcher = new NavbarDataFetcher()
      const heroBannerFetcher = new HeroBannerDataFetcher()
      const featuredLinksFetcher = new HomeFeaturedLinksDataFetcher()
      const defaultFooterContentFetcher = new DefaultFooterContentDataFetcher()
      const footerFetcher = new FooterDataFetcher(defaultFooterContentFetcher)

      HomePageDataFetcher.instance = new HomePageDataFetcher(
        navbarFetcher,
        heroBannerFetcher,
        featuredLinksFetcher,
        footerFetcher
      )
    }

    return HomePageDataFetcher.instance
  }
}
