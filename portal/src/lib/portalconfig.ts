type PortalConfig = {
  directusUrl: string;
  directusStaticToken: string;
};

export const getPortalConfig = (): PortalConfig => {
  const directusUrl = process.env.DIRECTUS_URL ?? "";
  console.log("DIRECTUS_URL in portalconfig:", directusUrl);

  if (directusUrl === "") {
    throw new Error("DIRECTUS_URL environment variable not set");
  }

  const directusStaticToken = process.env.DIRECTUS_STATIC_TOKEN ?? "";
  console.log("DIRECTUS_STATIC_TOKEN in portalconfig:", directusStaticToken);

  if (directusStaticToken === "") {
    throw new Error("DIRECTUS_STATIC_TOKEN environment variable not set");
  }

  return {
    directusUrl: directusUrl,
    directusStaticToken: directusStaticToken,
  } as PortalConfig;
};
