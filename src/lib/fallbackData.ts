import { DirectusSchema, landing_page, link, article, label, footer, location } from './directusdatafetcher';
import { LandingPageData, NavbarData, FooterData, BannerData, FeaturedLinksData, AnnouncementsData, EventsData } from '@/types';

export const fallbackDirectusSchema: DirectusSchema = {
  landing_page: [] as landing_page[],
  links: [] as link[],
  landing_page_links: [],
  articles: [] as article[],
  labels: [] as label[],
  events_labels: [],
  landing_page_labels: [],
  footer: [] as footer[],
  locations: [] as location[],
  quick_links: [],
  portal_links: [],
  feedback: { feedback: 'No feedback available' },
  footer_labels: [],
};

export const fallbackLandingPageData: LandingPageData = {
  banner: {
    logoSrc: '/path/to/fallback-logo.png',
    logoAlt: 'Fallback Logo',
    title: 'Fallback Title',
    tagline: 'Fallback Tagline',
    missionText: 'Fallback Mission',
    visionText: 'Fallback Vision',
  },
  breadcrumbs: { links: [] },
  featuredLinks: { links: [] },
  announcements: { articles: [] },
  events: { events: [] },
  footer: {
    streetAddress: 'Fallback Address',
    city: 'Fallback City',
    state: 'Fallback State',
    zip: '00000',
    phone: '000-000-0000',
    email: 'fallback@example.com',
    informationTitle: 'Fallback Information',
    informationText: 'No information available',
    linkFB: '#',
    linkX: '#',
    linkIG: '#',
    linkYT: '#',
    baseMapImage: '/path/to/fallback-map.png',
    quickLinks: [],
    guardianPortal: [],
    feedback: 'No feedback available',
  },
  navbar: {
    leftLinks: [],
    rightLinks: [],
    logo: '/path/to/fallback-logo.png',
    logoAlt: 'Fallback Logo',
    notificationsCount: 0,
    user: {
      name: 'Guest User',
      avatarUrl: '/path/to/fallback-avatar.png',
    },
  },
};

export const fallbackNavbarData: NavbarData = fallbackLandingPageData.navbar;
export const fallbackFooterData: FooterData = fallbackLandingPageData.footer;
export const fallbackBannerData: BannerData = fallbackLandingPageData.banner;
export const fallbackFeaturedLinksData: FeaturedLinksData = fallbackLandingPageData.featuredLinks;
export const fallbackAnnouncementsData: AnnouncementsData = fallbackLandingPageData.announcements;
export const fallbackEventsData: EventsData = fallbackLandingPageData.events;
