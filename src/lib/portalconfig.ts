type PortalConfig = {
  directusUrl: string
  directusStaticToken: string
}

export const getPortalConfig = (): PortalConfig => {
  const directusUrl = process.env.DIRECTUS_URL ?? ''

  if (directusUrl === '') {
    console.error('DIRECTUS_URL environment variable not set')
    process.exit(1)
  }

  const directusStaticToken = process.env.DIRECTUS_STATIC_TOKEN
  if (directusStaticToken === '') {
    console.error('DIRECTUS_STATIC_TOKEN environment variable not set')
    process.exit(1)
  }

  return {
    directusUrl: directusUrl,
    directusStaticToken: directusStaticToken,
  } as PortalConfig
}
