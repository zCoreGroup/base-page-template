import { DirectusDataFetcher, landing_page } from '@/lib/directusdatafetcher'
import { NavbarData } from '@/types'

export default class NavbarDataFetcher extends DirectusDataFetcher {
  async fetch(query: landing_page): Promise<NavbarData> {
    return {
      logo: '/assets/guardian_one_logo_wordMark.png',
      logoAlt: 'Logo',
      notificationsCount: 4,
      user: {
        name: 'User Name',
        avatarUrl: '/assets/avatar.png',
      },
      leftLinks: [
        {
          name: 'Doctrine',
          url: 'https://spaceforce.mil',
        },
        {
          name: 'News',
          url: 'https://spaceforce.mil',
        },
      ],
      rightLinks: [
        {
          name: 'CSO Corner',
          url: 'https://spaceforce.mil',
        },
        {
          name: 'Multimedia',
          url: 'https://spaceforce.mil',
        },
      ],
    }
  }

  async fetchWelcomePageNavbar(): Promise<NavbarData> {
    return {
      logo: '/assets/guardian_one_logo_wordMark.png',
      logoAlt: 'Logo',
      notificationsCount: 4,
      user: {
        name: 'User Name',
        avatarUrl: '/assets/avatar.png',
      },
      leftLinks: [
        {
          name: 'Doctrine',
          url: 'https://spaceforce.mil',
        },
        {
          name: 'News',
          url: 'https://spaceforce.mil',
        },
      ],
      rightLinks: [
        {
          name: 'CSO Corner',
          url: 'https://spaceforce.mil',
        },
        {
          name: 'Multimedia',
          url: 'https://spaceforce.mil',
        },
      ],
    }
  }
}
