// Mock the necessary modules
jest.mock('@directus/sdk', () => ({
    createDirectus: jest.fn(),
    graphql: jest.fn(),
}));
jest.mock('../../src/lib/portalconfig', () => ({
    getPortalConfig: jest.fn(),
}));

describe('DataFetcher', () => {
    const mockPortalConfig = {
        directusUrl: 'http://mocked-url.com',
    };

    beforeEach(() => {
        // Clear module cache and mock implementations
        jest.resetModules();
        jest.clearAllMocks();

        // Mock the getPortalConfig function
        const { getPortalConfig } = require('../../src/lib/portalconfig');
        (getPortalConfig as jest.Mock).mockReturnValue(mockPortalConfig);

        // Mock the createDirectus function
        const { createDirectus } = require('@directus/sdk');
        const mockWith = jest.fn().mockReturnThis();
        (createDirectus as jest.Mock).mockReturnValue({
            with: mockWith,
        } as any);
    });

    it('should initialize Directus client with the correct URL from portalConfig', () => {
        // Dynamically import the DataFetcher class after mocks have been set up
        const { DirectusDataFetcher } = require('../../src/lib/directusdatafetcher');
        
        // Concrete subclass for testing
        class TestFetcher extends DirectusDataFetcher {
            fetch<T>(): T {
                // Simulate fetching data
                return {} as T;
            }
        }

        const fetcher = new TestFetcher();
        const { createDirectus, graphql } = require('@directus/sdk');
        expect(createDirectus).toHaveBeenCalledWith(mockPortalConfig.directusUrl);
        expect((createDirectus(mockPortalConfig.directusUrl) as any).with).toHaveBeenCalledWith(graphql());
    });

    it('should call fetch method', () => {
        // Dynamically import the DataFetcher class after mocks have been set up
        const { DirectusDataFetcher } = require('../../src/lib/directusdatafetcher');
        
        // Concrete subclass for testing
        class TestFetcher extends DirectusDataFetcher {
            fetch<T>(): T {
                // Simulate fetching data
                return {} as T;
            }
        }

        const fetcher = new TestFetcher();
        const result = fetcher.fetch<{ someField: string }>();
        expect(result).toEqual({});
    });
});
