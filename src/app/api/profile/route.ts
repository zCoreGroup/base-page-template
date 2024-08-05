import ProfilePageDataFetcher from '@/app/profile/dataFetcher'
import { NextResponse } from 'next/server'

const dataFetcher = ProfilePageDataFetcher.getInstance()

export async function GET(): Promise<NextResponse> {
  try {
    const profilePageData = await dataFetcher.fetch()
    return NextResponse.json(profilePageData, { status: 200 })
  } catch (error) {
    console.error('Error fetching profile page data:', error)
    return NextResponse.json({ error: 'Failed to fetch the profile page data' }, { status: 500 })
  }
}
