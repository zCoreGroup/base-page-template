import { DirectusDataFetcher, welcome_page } from '@/lib/directusdatafetcher'
import NavbarDataFetcher from '@/components/navbar/datafetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import { HomePageData } from '@/types'

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
      this.footerFetcher.fetch({
        articles: [],
        date_created: '',
        date_updated: '',
        description: '',
        documentation: [],
        events: [],
        featured: [],
        footer: '239fec6b-e9cd-4dd6-b9aa-fd2d30e014b3',
        id: 1,
        labels: [],
        logo: '',
        mission: '',
        slug: '',
        status: '',
        tagline: 'Capacity - Agility - Responsiveness - Resilience',
        title: '',
        user_created: '',
        user_updated: '',
        vision: '',
      }),
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
