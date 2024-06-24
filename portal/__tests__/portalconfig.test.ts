import { getPortalConfig } from '../src/portalconfig';

describe('getPortalConfig', () => {
    beforeAll(() => {
        // Load environment variables from .env.test
        require('dotenv').config({ path: './.env.test' });
    });

    afterEach(() => {
        jest.resetModules();
    });

    it('should return the correct URL from environment variables', () => {
        const config = getPortalConfig();
        expect(config.directusUrl).toBe('http://mocked-directus.com');
    });

    it('should exit the process if DIRECTUS_URL is not set', () => {
        // Save original process.exit and console.error
        const originalExit = process.exit;
        const originalError = console.error;

        // Mock process.exit and console.error
        process.exit = jest.fn() as any;
        console.error = jest.fn();

        // Remove DIRECTUS_URL from environment variables
        delete process.env.DIRECTUS_URL;

        // Try to get the portal config
        try {
            getPortalConfig();
        } catch (error) {
            // Do nothing
        }

        // Check that console.error was called with the correct message
        expect(console.error).toHaveBeenCalledWith("DIRECTUS_URL environment variable not set");

        // Check that process.exit was called with 1
        expect(process.exit).toHaveBeenCalledWith(1);

        // Restore original process.exit and console.error
        process.exit = originalExit;
        console.error = originalError;
    });
});
