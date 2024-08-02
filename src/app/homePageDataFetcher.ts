import { DirectusDataFetcher, welcome_page } from '@/lib/directusdatafetcher'
import NavbarDataFetcher from '@/components/navbar/datafetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import { HomePageData } from '@/types'
import FeaturedLinksDataFetcher from '@/components/featured-links/dataFetcher'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'

export default class HomePageDataFetcher extends DirectusDataFetcher {
  static instance: HomePageDataFetcher

  private navbarFetcher: NavbarDataFetcher
  private featuredLinksFetcher: FeaturedLinksDataFetcher
  private footerFetcher: FooterDataFetcher

  constructor(
    navbarFetcher: NavbarDataFetcher,
    featuredLinksDataFetcher: FeaturedLinksDataFetcher,
    footerFetcher: FooterDataFetcher
  ) {
    super()
    this.navbarFetcher = navbarFetcher
    this.featuredLinksFetcher = featuredLinksDataFetcher
    this.footerFetcher = footerFetcher
  }

  async fetch(): Promise<HomePageData> {
    const landingPage = {
      articles: [],
      date_created: '2024-06-26T16:36:53.156Z',
      date_updated: '2024-07-23T14:59:26.406Z',
      description:
        "<p>Space Launch Delta 30, Vandenberg's host unit, supports West Coast launch activities for the Air Force, Department of Defense, National Aeronautics and Space Administration, national programs and various private industry contractors. SLD 30 supports the processing and launch of a variety of expendable vehicles including Atlas V, Delta IV, Pegasus, Minotaur, and Falcon 9. The Delta also supports Force Development and Evaluation of all intercontinental ballistic missiles, as well as Missile Defense Agency (MDA) test and operations.</p>",
      documentation: [],
      events: [],
      featured: [31, 32, 33, 34, 35, 36, 37, 38],
      footer: '239fec6b-e9cd-4dd6-b9aa-fd2d30e014b3',
      id: 1,
      labels: [],
      logo: '2367b629-360f-4141-8a43-ad317341af19',
      mission:
        'Provide agile responsive and resilient spaceport, test range, and installation capabilities for the nation',
      slug: 'vandenberg',
      status: 'published',
      tagline: 'Capacity - Agility - Responsiveness - Resilience',
      title: 'Vandenberg Space Force Base',
      user_created: 'c3a4ecb9-07a7-4d67-87f4-0bf3703091ac',
      user_updated: 'c3a4ecb9-07a7-4d67-87f4-0bf3703091ac',
      vision:
        'Unconstrained space launch and test event capacity from the Department of the Air Force’s base of choice',
    }
    try {
      const [navbarData, featuredLinksData, footerData] = await Promise.all([
        this.fetchWithTimeout(this.navbarFetcher.fetchWelcomePageNavbar(), 5000),
        this.fetchWithTimeout(this.featuredLinksFetcher.fetch(landingPage), 5000),
        this.fetchWithTimeout(this.footerFetcher.fetch(landingPage), 5000),
      ])

      return {
        navbar: navbarData,
        featuredLinks: featuredLinksData,
        footer: footerData,
      } as HomePageData
    } catch (error) {
      console.error('Error fetching home page data', error)
      throw error
    }
  }

  private async fetchWithTimeout(promiseFunc: Promise<any>, timeoutMs: number) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    )
    return Promise.race([promiseFunc, timeoutPromise])
  }

  static getInstance(): HomePageDataFetcher {
    if (HomePageDataFetcher.instance == undefined) {
      const navbarFetcher = new NavbarDataFetcher()
      const featuredLinksFetcher = new FeaturedLinksDataFetcher()
      const defaultFooterContentFetcher = new DefaultFooterContentDataFetcher()
      const footerFetcher = new FooterDataFetcher(defaultFooterContentFetcher)

      HomePageDataFetcher.instance = new HomePageDataFetcher(navbarFetcher, featuredLinksFetcher, footerFetcher)
    }

    return HomePageDataFetcher.instance
  }
}