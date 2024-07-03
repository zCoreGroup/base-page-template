// types.ts
export type NavbarLink = {
    name: string;
    url: string;
}

export type NavbarData = {
    links: NavbarLink[];
    notificationsCount: number;
    user: {
        name: string;
        avatarUrl: string;
    };
    logo: string;
    logoAlt: string;
    doctrine: string;
    news: string;
    csoCorner: string;
    multimedia: string;
}