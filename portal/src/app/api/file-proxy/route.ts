import { NextRequest, NextResponse } from 'next/server';
import { DirectusDataFetcher } from '@/lib/directusdatafetcher';
import { readAssetRaw, readFile } from '@directus/sdk';


const directusDataFetcher = new DirectusDataFetcher();
// tell to browser to cache for one month
const browserCacheTime = 2592000000;

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const uuid = searchParams.get('uuid');

  if (!uuid) {
    return NextResponse.json({ error: 'File UUID required' }, { status: 400 });
  }

  try {
    const file = await directusDataFetcher.client.request(readFile(uuid));
    const fileData = await directusDataFetcher.client.request(readAssetRaw(uuid));
    return new NextResponse(fileData, {
      headers: {
        'Content-Type': file.type ?? "",
        'Cache-Control' : `max-age=${browserCacheTime}, public`
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch the file' }, { status: 500 });
  }
}