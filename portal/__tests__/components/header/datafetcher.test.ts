import HeaderDataFetcher from "@/components/header/datafetcher";
import { landing_page } from "@/lib/directusdatafetcher";
import { HeaderData } from "@/types";

jest.mock("../../../src/lib/directusdatafetcher");

describe("HeaderDataFetcher", () => {
    let headerDataFetcher: HeaderDataFetcher;

    beforeEach(() => {
        headerDataFetcher = new HeaderDataFetcher();
    });

    it("should fetch header data correctly", async () => {
        const mockLandingPage: landing_page = {
            title: "Test Title",
            tagline: "Test Tagline",
            logo: "logo-id",
            mission: "Test Mission",
            vision: "Test Vision",
            id: 0,
            status: "",
            user_created: "",
            date_created: "",
            user_updated: "",
            date_updated: "",
            description: "",
            slug: "",
            announcements: [],
            featured: [],
            documentation: []
        };

        const expectedHeaderData: HeaderData = {
            logoSrc: "mock-url/logo-id",
            logoAlt: "Test Title",
            title: "Test Title",
            tagline: "Test Tagline",
            missionText: "Test Mission",
            visionText: "Test Vision",
        };

        (headerDataFetcher.getFileUrl as jest.Mock).mockReturnValue("mock-url/logo-id");

        const result = await headerDataFetcher.fetch(mockLandingPage);

        expect(result).toEqual(expectedHeaderData);
        expect(headerDataFetcher.getFileUrl).toHaveBeenCalledWith("logo-id");
    });

    it("should handle missing tagline", async () => {
        const mockLandingPage: landing_page = {
            title: "Test Title",
            tagline: "",
            logo: "logo-id",
            mission: "Test Mission",
            vision: "Test Vision",
            id: 0,
            status: "",
            user_created: "",
            date_created: "",
            user_updated: "",
            date_updated: "",
            description: "",
            slug: "",
            announcements: [],
            featured: [],
            documentation: []
        };

        const expectedHeaderData: HeaderData = {
            logoSrc: "mock-url/logo-id",
            logoAlt: "Test Title",
            title: "Test Title",
            tagline: "",
            missionText: "Test Mission",
            visionText: "Test Vision",
        };

        (headerDataFetcher.getFileUrl as jest.Mock).mockReturnValue("mock-url/logo-id");

        const result = await headerDataFetcher.fetch(mockLandingPage);

        expect(result).toEqual(expectedHeaderData);
        expect(headerDataFetcher.getFileUrl).toHaveBeenCalledWith("logo-id");
    });
});
