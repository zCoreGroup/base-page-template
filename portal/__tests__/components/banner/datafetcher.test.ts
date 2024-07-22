import BannerDataFetcher from "@/components/banner/datafetcher";
import { landing_page } from "@/lib/directusdatafetcher";
import { BannerData } from "@/types";

jest.mock("../../../src/lib/directusdatafetcher");

describe("BannerDataFetcher", () => {
    let bannerDataFetcher: BannerDataFetcher;

    beforeEach(() => {
        bannerDataFetcher = new BannerDataFetcher();
    });

    it("should fetch banner data correctly", async () => {
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

        const expectedBannerData: BannerData = {
            logoSrc: "mock-url/logo-id",
            logoAlt: "Test Title",
            title: "TEST TITLE",
            tagline: "Test Tagline",
            missionText: "Test Mission",
            visionText: "Test Vision",
        };

        (bannerDataFetcher.getFileUrl as jest.Mock).mockReturnValue("mock-url/logo-id");

        const result = await bannerDataFetcher.fetch(mockLandingPage);

        expect(result).toEqual(expectedBannerData);
        expect(bannerDataFetcher.getFileUrl).toHaveBeenCalledWith("logo-id");
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

        const expectedBannerData: BannerData = {
            logoSrc: "mock-url/logo-id",
            logoAlt: "Test Title",
            title: "TEST TITLE",
            tagline: "",
            missionText: "Test Mission",
            visionText: "Test Vision",
        };

        (bannerDataFetcher.getFileUrl as jest.Mock).mockReturnValue("mock-url/logo-id");

        const result = await bannerDataFetcher.fetch(mockLandingPage);

        expect(result).toEqual(expectedBannerData);
        expect(bannerDataFetcher.getFileUrl).toHaveBeenCalledWith("logo-id");
    });
});
