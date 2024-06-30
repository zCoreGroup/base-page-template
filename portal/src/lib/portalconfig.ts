type PortalConfig = {
    directusUrl: string;
    directusStaticToken: string;
}

export const getPortalConfig = (): PortalConfig => {
    const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? "";
    console.log("NEXT_PUBLIC_DIRECTUS_URL:", directusUrl);

    if (directusUrl === "") {
        console.error("NEXT_PUBLIC_DIRECTUS_URL environment variable not set. Using fallback value.");
    }

    const directusStaticToken = process.env.NEXT_PUBLIC_DIRECTUS_STATIC_TOKEN ?? "";
    console.log("NEXT_PUBLIC_DIRECTUS_STATIC_TOKEN:", directusStaticToken);

    if (directusStaticToken === "") {
        console.error("NEXT_PUBLIC_DIRECTUS_STATIC_TOKEN environment variable not set. Using fallback value.");
    }

    return {
        directusUrl: directusUrl || 'http://fallback-directus-url.com',
        directusStaticToken: directusStaticToken || 'fallback-static-token'
    } as PortalConfig;
}
