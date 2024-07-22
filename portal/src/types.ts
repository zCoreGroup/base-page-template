export type LandingPageData = {
    banner: BannerData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
    events: EventsData
    footer: FooterData
    navbar: NavbarData
}

export type LandingPageQuery = {
    slug: string;
}

export type LandingPageShort = {
    slug: string;
    title: string;
}
export type Announcement = {
  title: string
  body: string
  image: string
}

export type AnnouncementsData = {
  articles: Announcement[]
}

export type Schedule = {
    label: string;
    startTime: string;
};

export type Event = {
    id: string;
    status: string;
    userCreated: string;
    dateCreated: string;
    userUpdated: string;
    dateUpdated: string;
    title: string;
    description: string;
    image: string;
    schedule: Schedule;
    startDate: string;
    endDate: string;
    slug: string;
    labels: number[];
}

export type EventsData = {
  events: Event[]
}

export type FeaturedLink = {
    name: string
    url: string
}

export type FeaturedLinksData = {
    links: FeaturedLink[]
}
export type FooterData = {
    title1: string;
    streetAddress: string;
    cityState: string;
    phone: string;
    email: string;
    phone1: string;
    email1: string;
    title2: string;
    hoursMon: string;
    hoursSat: string;
    hoursSun: string;
    hours2: string;
    hours3: string;
    title3: string;
    feedback: string;
    title4: string;
    linkFB: string;
    linkX: string;
    linkIG: string;
    linkYT: string;
};

export type FooterQuery = {
    landingPageId: string;
};
export type BannerData = {
    logoSrc: string;
    logoAlt: string;
    title: string;
    tagline: string;
    missionText: string;
    visionText: string;
};
export type HexagonImageLinkData  = {
    url: string;
    imageUrl: string;
    name: string;
}
export type HexagonImageOverlayData = {
    imageUrl: string;
    altText: string;
    sideLength: number;
};
export type NavbarLink = {
    name: string;
    url: string;
};

export type User = {
    name: string;
    avatarUrl: string;
};

export type NavbarData = {
    leftLinks: NavbarLink[];
    rightLinks: NavbarLink[];
    logo: string;
    logoAlt: string;
    notificationsCount: number;
    user: User;
};

