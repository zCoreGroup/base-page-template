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
  dateCreated: string
}

export type AnnouncementsData = {
  articles: Announcement[]
}

export type Schedule = {
    label: string;
    startTime: string;
};

export type Article = {
    id: number;
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
  events: Article[]
}

export type FeaturedLink = {
    name: string
    url: string
    imageUrl: string
}

export type FeaturedLinksData = {
    links: FeaturedLink[]
}
export type FooterData = {
    streetAddress: string;
    city: string;
    state: string,
    zip: string;
    phone: string;
    email: string;
    informationTitle: string;
    informationText: string;
    linkFB: string;
    linkX: string;
    linkIG: string;
    linkYT: string;
    baseMapImage: string;
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


