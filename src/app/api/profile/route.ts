import ProfilePageDataFetcher from '@/app/profile/dataFetcher'
import { NextRequest, NextResponse } from 'next/server'

const dataFetcher = ProfilePageDataFetcher.getInstance()

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const profilePageData = await dataFetcher.fetch()
    return NextResponse.json(profilePageData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch the profile page data' }, { status: 500 })
  }
}
