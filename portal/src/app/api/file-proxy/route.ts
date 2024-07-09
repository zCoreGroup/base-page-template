import { NextRequest, NextResponse } from 'next/server';
import { DirectusDataFetcher } from '@/lib/directusdatafetcher';
import { readAssetRaw, readFile } from '@directus/sdk';


const directusDataFetcher = new DirectusDataFetcher();
// tell to browser to cache for one month
const browserCacheTime = 2592000000;

/**
 * @swagger
 * /api/file-proxy:
 *   get:
 *     summary: Fetches a file based on the provided UUID.
 *     description: Returns the file data if a UUID is provided, otherwise returns an error message.
 *     parameters:
 *       - in: query
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The UUID of the file to fetch.
 *     responses:
 *       200:
 *         description: A successful response with the file data.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: File UUID required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: File UUID required
 *       500:
 *         description: Failed to fetch the file.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to fetch the file
 */
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