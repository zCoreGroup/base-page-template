import { DirectusDataFetcher } from '@/lib/directusdatafetcher'
import NavbarDataFetcher from '@/components/navbar/navbarDataFetcher'
import { ProfilePageData } from '@/types'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'

export default class ProfilePageDataFetcher extends DirectusDataFetcher {
  static instance: ProfilePageDataFetcher

  private navbarFetcher: NavbarDataFetcher
  private footerFetcher: FooterDataFetcher

  constructor(navbarFetcher: NavbarDataFetcher, footerFetcher: FooterDataFetcher) {
    super()
    this.navbarFetcher = navbarFetcher
    this.footerFetcher = footerFetcher
  }

  async fetch(): Promise<ProfilePageData> {
    try {
      const [navbarData, footerData] = await Promise.all([
        this.fetchWithTimeout(this.navbarFetcher.fetch()),
        this.fetchWithTimeout(this.footerFetcher.fetch()),
      ])

      return {
        navbar: navbarData,
        footer: footerData,
      }
    } catch (error) {
      console.error('Error fetching profile page data', error)
      throw error
    }
  }

  static getInstance(): ProfilePageDataFetcher {
    if (ProfilePageDataFetcher.instance == undefined) {
      const navbarFetcher = new NavbarDataFetcher()
      const defaultFooterContentFetcher = new DefaultFooterContentDataFetcher()

      const footerFetcher = new FooterDataFetcher(defaultFooterContentFetcher)
      ProfilePageDataFetcher.instance = new ProfilePageDataFetcher(navbarFetcher, footerFetcher)
    }

    return ProfilePageDataFetcher.instance
  }
}
