import { NextRequest, NextResponse } from 'next/server';
import { DirectusDataFetcher, DirectusSchema } from '@/lib/directusdatafetcher';
import { RestClient, readAssetRaw, readFile } from '@directus/sdk';
import { requestHandler } from '@/app/api/file-proxy/route'; // Replace with the actual path

jest.mock('../../../../src/lib/directusdatafetcher', () => {
    return {
        DirectusDataFetcher: jest.fn().mockImplementation(() => {
            return {
                client: {
                    request: jest.fn(),
                } as unknown as RestClient<DirectusSchema>
            };
        })
    };
});

jest.mock('@directus/sdk', () => {
    return {
        readFile: jest.fn(),
        readAssetRaw: jest.fn(),
    };
});

jest.mock('next/server', () => {
    return {
        NextRequest: jest.fn().mockImplementation(() => {
            return {
                url: ''
            };
        }),
        NextResponse: {
            json: jest.fn((data, init) => {
                return {
                    status: init?.status,
                    json: async () => data,
                };
            }),
            text: jest.fn((data, init) => {
                return {
                    status: init?.status,
                    text: async () => data,
                };
            }),
            headers: {
                get: jest.fn(),
                set: jest.fn(),
            },
        },
    };
});

describe('requestHandler', () => {
    const mockUuid = 'test-uuid';
    const mockFile = { type: 'image/png' };
    const mockFileData = Buffer.from('mock file data');

    let req: Partial<NextRequest>;
    let fetcherInstance: jest.Mocked<DirectusDataFetcher>;

    beforeEach(() => {
        fetcherInstance = {
            client: {
                request: jest.fn(),
            },
        } as unknown as jest.Mocked<DirectusDataFetcher>;
        (DirectusDataFetcher as jest.Mock).mockImplementation(() => fetcherInstance);
        req = {
            url: `https://example.com/api?uuid=${mockUuid}`,
        };

        (readFile as jest.Mock).mockReturnValue(mockFile);
        (readAssetRaw as jest.Mock).mockReturnValue(mockFileData);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return 400 if UUID is missing', async () => {
        req.url = 'https://example.com/api'; // No UUID in query params
        const response = await requestHandler(req as NextRequest);
        const jsonResponse = await response.json();

        expect(response.status).toBe(400);
        expect(jsonResponse.error).toBe('File UUID required');
    });

    it('should return 500 if fetching the file fails', async () => {
        fetcherInstance.client.request.mockRejectedValue(new Error('Fetch failed'));

        const response = await requestHandler(req as NextRequest);
        const jsonResponse = await response.json();

        expect(response.status).toBe(500);
        expect(jsonResponse.error).toBe('Failed to fetch the file');
    });
});