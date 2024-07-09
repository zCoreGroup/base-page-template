export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
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
  description: string
  image: string
}

export type AnnouncementsData = {
  announcements: Announcement[]
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
export type HeaderData = {
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

