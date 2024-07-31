import { createDirectus, rest, RestClient, staticToken } from '@directus/sdk'
import { getPortalConfig } from './portalconfig'

export type landing_page = {
  id: number
  status: string
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  logo: string
  title: string
  description: string
  slug: string
  mission: string
  vision: string
  tagline: string | null
  articles: number[]
  featured: number[]
  documentation: number[]
  events: number[]
  labels: number[]
  footer: string
}

export type link = {
  id: number
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  name: string
  url: string
  description: string
  image: string
}

export type landing_page_links = {
  id: number
  landing_page_id: number
  links_id: number
}

export type article = {
  id: number
  status: string
  sort: number | null
  user_created: string
  date_created: string
  user_updated: string
  category: string
  title: string
  body: string
  published_date: string
  slug: string
  image: string
  document: number | null
  landing_page: number
  comments: number[]
}

export type label = {
  id: string
  name: string
}

export type events_labels = {
  id: number
  labels_id: string
  events_id: string
}

export type landing_page_labels = {
  id: number
  landing_page_id: number
  labels_id: string
}

export type footer = {
  id: string
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  feedback: string
  twitter: string
  facebook: string
  instagram: string
  youtube: string
  linkedin: string | null
  title: number
  location: number
  flicker: string | null
  information: string
  information_text: string
  image: string | null
  labels: number[]
}

export type location = {
  id: number
  sort: number | null
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  name: string
  address: string
  coordinates: {
    type: string
    coordinates: [number, number]
  }
  city: string
  zip: string
  state: string
  phone: string | null
  email: string | null
  labels: number[]
}

export type RawFooterLink = {
  id: string
  name: string
  url: string
  open_in_new: string
}

export type Feedback = {
  feedback: string
}

export type DirectusSchema = {
  landing_page: landing_page[]
  links: link[]
  landing_page_links: landing_page_links[]
  articles: article[]
  labels: label[]
  events_labels: events_labels[]
  landing_page_labels: landing_page_labels[]
  footer: footer[]
  locations: location[]
  quick_links: RawFooterLink[]
  portal_links: RawFooterLink[]
  feedback: Feedback
}

const portalConfig = getPortalConfig()

export class DirectusDataFetcher {
  private static directusClient = createDirectus<DirectusSchema>(portalConfig.directusUrl)
    .with(staticToken(portalConfig.directusStaticToken))
    .with(rest())

  get client(): RestClient<DirectusSchema> {
    return DirectusDataFetcher.directusClient
  }

  getFileUrl(uuid: string): string {
    return `/api/file-proxy/?uuid=${uuid}`
  }
}
