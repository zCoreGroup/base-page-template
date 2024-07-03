import { NextRequest, NextResponse } from 'next/server';
import LandingPageDataFetcher from '@/app/[slug]/datafetcher';
import { LandingPageQuery } from '@/app/[slug]/types';

const dataFetcher = LandingPageDataFetcher.getInstance();

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    const shortData = await dataFetcher.getAllShort();
    return NextResponse.json(shortData, { status: 200 });
  }

  try {
    const query: LandingPageQuery = {slug: slug};
    const landingPage = await dataFetcher.fetch(query);
    return NextResponse.json(landingPage, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch the landing page data' }, { status: 500 });
  }
}