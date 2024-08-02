import { DirectusDataFetcher, landing_page, NavigationData } from '@/lib/directusdatafetcher'
import { NavbarData } from '@/types'
import { readSingleton } from '@directus/sdk'

export default class NavbarDataFetcher extends DirectusDataFetcher {
  async fetch(): Promise<NavbarData> {
    const navigationData = await this.getNavigationData()

    return {
      logo: '/assets/guardian_one_logo_wordMark.png',
      logoAlt: 'Logo',
      notificationsCount: 0,
      user: {
        name: 'User Name',
        avatarUrl: '/assets/avatar.png',
      },
      leftLinks: [
        {
          name: navigationData.name1,
          url: navigationData.link1,
        },
        {
          name: navigationData.name2,
          url: navigationData.link2,
        },
      ],
      rightLinks: [
        {
          name: navigationData.name3,
          url: navigationData.link3,
        },
        {
          name: navigationData.name4,
          url: navigationData.link4,
        },
        {
          name: navigationData.name5,
          url: navigationData.link5,
        },
      ],
    }
  }

  async getNavigationData(): Promise<NavigationData> {
    const navigation = await this.client.request(readSingleton('navigation'))
    return navigation
  }
}
