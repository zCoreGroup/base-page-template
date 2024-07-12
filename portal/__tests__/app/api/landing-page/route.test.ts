import { NextRequest, NextResponse } from 'next/server';
import LandingPageDataFetcher from '@/app/[slug]/datafetcher';

jest.mock('../../../../src/app/[slug]/datafetcher');
jest.mock('next/server', () => ({
    NextRequest: class {
        constructor(public url: string) { }
    },
    NextResponse: {
        json: jest.fn(),
    },
}));

const MockLandingPageDataFetcher = LandingPageDataFetcher as jest.Mocked<typeof LandingPageDataFetcher>;

describe('GET handler', () => {
    const mockFetch = jest.fn();
    const mockGetAllShort = jest.fn();

    beforeAll(() => {
        MockLandingPageDataFetcher.getInstance.mockReturnValue({
            fetch: mockFetch,
            getAllShort: mockGetAllShort,
        } as any);
    });

    beforeEach(() => {
        (NextResponse.json as jest.Mock).mockClear();
        mockFetch.mockClear();
        mockGetAllShort.mockClear();
    });

    // Import GET after setting up the mock
    let GET: (req: NextRequest) => Promise<NextResponse>;
    beforeAll(async () => {
        const mod = await import('@/app/api/landing-page/route'); // Adjust the path accordingly
        GET = mod.GET;
    });

    it('should return all short data when no slug is provided', async () => {
        const req = new NextRequest('http://localhost/?noSlug=true');
        mockGetAllShort.mockResolvedValueOnce([{ id: 1, name: 'Short Data' }]);

        const response = await GET(req);

        expect(mockGetAllShort).toHaveBeenCalled();
        expect(NextResponse.json).toHaveBeenCalledWith([{ id: 1, name: 'Short Data' }], { status: 200 });
    });

    it('should fetch landing page data when slug is provided', async () => {
        const req = new NextRequest('http://localhost/?slug=test-slug');
        const expectedData = { id: 1, slug: 'test-slug', name: 'Landing Page' };
        mockFetch.mockResolvedValueOnce(expectedData);

        const response = await GET(req);

        expect(mockFetch).toHaveBeenCalledWith({ slug: 'test-slug' });
        expect(NextResponse.json).toHaveBeenCalledWith(expectedData, { status: 200 });
    });

    it('should return a 500 status when fetch fails', async () => {
        const req = new NextRequest('http://localhost/?slug=test-slug');
        mockFetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const response = await GET(req);

        expect(mockFetch).toHaveBeenCalledWith({ slug: 'test-slug' });
        expect(NextResponse.json).toHaveBeenCalledWith({ error: 'Failed to fetch the landing page data' }, { status: 500 });
    });
});