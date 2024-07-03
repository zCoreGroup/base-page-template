// types.ts
export type NavbarLink = {
    name: string;
    url: string;
}

export type User = {
    name: string;
    avatarUrl: string
}

export type NavbarData = {
    leftLinks: NavbarLink[];
    rightLinks: NavbarLink[];
    logo: string;
    logoAlt: string;
    notificationsCount: number;
    user: User;
}