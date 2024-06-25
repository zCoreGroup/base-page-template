export type FeaturedLink = {
    name: string,
    url: string,
    imageUrl: string
}

export type FeaturedLinksData = {
    links: FeaturedLink[]
}

export type FeaturedLinkQuery = {
    landingPageId: string
}