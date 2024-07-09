import { NextRequest, NextResponse } from 'next/server';
import LandingPageDataFetcher from '@/app/[slug]/datafetcher';
import { LandingPageQuery } from '@/types';

const dataFetcher = LandingPageDataFetcher.getInstance();

/**
 * @swagger
 * /api/landing-page:
 *   get:
 *     summary: Fetches landing page data based on the provided slug.
 *     description: Returns landing page data if a slug is provided, otherwise returns a list of all short data.
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: The slug of the landing page to fetch.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LandingPageData'
 *       500:
 *         description: An error occurred while fetching the data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
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