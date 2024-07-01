
export type Announcement = {
  name: string
  description: string
  imageSrc: string
}

export type AnnouncementsData = {
  name: string
  items: Announcement[]
}

export type AnnouncementsQuery = {
  landingPageId: string
}