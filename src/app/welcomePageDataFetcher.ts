import {DirectusDataFetcher, welcome_page} from "@/lib/directusdatafetcher";
import NavbarDataFetcher from "@/components/navbar/datafetcher";
import FooterDataFetcher from "@/components/footer/datafetcher";
import {readItems} from "@directus/sdk";
import {WelcomePageData} from "@/types";
import {DuplicateWelcomePage, WelcomePageNotFound} from "@/lib/errors";

export default class WelcomePageDataFetcher extends DirectusDataFetcher {
  static instance: WelcomePageDataFetcher

  private navbarFetcher: NavbarDataFetcher
  private footerFetcher: FooterDataFetcher

  constructor(
    navbarFetcher: NavbarDataFetcher,
    footerFetcher: FooterDataFetcher
  ) {
    super()
    this.navbarFetcher = navbarFetcher
    this.footerFetcher = footerFetcher
  }

  async fetch(): Promise<WelcomePageData> {
    const [navbarData, footerData] = await Promise.all([
      this.navbarFetcher.fetchWelcomePageNavbar(),
      this.footerFetcher.fetch({landingPageId: ''}),
    ])

    return {
      navbar: navbarData,
      footer: footerData,
    } as WelcomePageData
  }

  // async findWelcomePage(): Promise<welcome_page> {
  //   const result = await this.client.request(readItems('welcome_page'))
  //
  //   if (result.length === 0) {
  //     throw new WelcomePageNotFound()
  //   }
  //
  //   if (result.length > 1) {
  //     throw new DuplicateWelcomePage()
  //   }
  //
  //   return result[0]
  // }

  static getInstance(): WelcomePageDataFetcher {
    if (WelcomePageDataFetcher.instance == undefined) {
      const navbarFetcher = new NavbarDataFetcher()
      const footerFetcher = new FooterDataFetcher()

      WelcomePageDataFetcher.instance = new WelcomePageDataFetcher(navbarFetcher, footerFetcher)
    }

    return WelcomePageDataFetcher.instance
  }
}