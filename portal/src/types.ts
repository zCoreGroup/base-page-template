export type LandingPageData = {
    header: HeaderData
    featuredLinks: FeaturedLinksData
    announcements: AnnouncementsData
    footer: FooterData
    navbar: NavbarData
}

export type FooterData = {
    id: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    hours: string;
    feedback: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
    title: 1;
    location: number;
    flicker: string;

};

export type CombinedFooterData = {
    name: string;
    address: string;
    coordinates: object;
    city: string;
    zip: number;
    state: string;
    phone: string;
    email: string;
    hours: string;
    feedback: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
    //title: string;
    //location: string;
    flicker: string;
}

export type LocationData = {
    id: number;
    sort: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    name: string;
    address: string;
    coordinates: object;
    city: string;
    zip: number;
    state: string;
    phone: string;
    email: string;

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

