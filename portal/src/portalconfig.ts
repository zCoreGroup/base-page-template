type PortalConfig = {
    directusUrl: string;
}

export const getPortalConfig = (): PortalConfig => {

    const directusUrl = process.env.DIRECTUS_URL ?? "";

    if (directusUrl === "") {
        console.error("DIRECTUS_URL environment variable not set");
        process.exit(1);
    }

    return {
        directusUrl: directusUrl
    } as PortalConfig;
}

