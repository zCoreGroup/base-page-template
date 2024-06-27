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
    }
}

export type NavbarQuery = {
    landingPageId: string;
}
