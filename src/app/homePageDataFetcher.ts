import { DirectusDataFetcher, welcome_page } from '@/lib/directusdatafetcher'
import NavbarDataFetcher from '@/components/navbar/datafetcher'
import FooterDataFetcher from '@/components/footer/datafetcher'
import { readItems } from '@directus/sdk'
import { HomePageData } from '@/types'
import { DuplicateWelcomePage, WelcomePageNotFound } from '@/lib/errors'

export default class HomePageDataFetcher extends DirectusDataFetcher {
  static instance: HomePageDataFetcher

  private navbarFetcher: NavbarDataFetcher
  private footerFetcher: FooterDataFetcher

  constructor(navbarFetcher: NavbarDataFetcher, footerFetcher: FooterDataFetcher) {
    super()
    this.navbarFetcher = navbarFetcher
    this.footerFetcher = footerFetcher
  }

  async fetch(): Promise<HomePageData> {
    const [navbarData, footerData] = await Promise.all([
      this.navbarFetcher.fetchWelcomePageNavbar(),
      this.footerFetcher.fetch({ landingPageId: '' }),
    ])

    return {
      navbar: navbarData,
      footer: footerData,
    } as HomePageData
  }

  static getInstance(): HomePageDataFetcher {
    if (HomePageDataFetcher.instance == undefined) {
      const navbarFetcher = new NavbarDataFetcher()
      const footerFetcher = new FooterDataFetcher()

      HomePageDataFetcher.instance = new HomePageDataFetcher(navbarFetcher, footerFetcher)
    }

    return HomePageDataFetcher.instance
  }
}
