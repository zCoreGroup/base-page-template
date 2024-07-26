import FeaturedLinksDataFetcher from "@/components/featuredlinks/datafetcher";
import { RestClient } from "@directus/sdk";
import { landing_page, link } from "@/lib/directusdatafetcher";

// Mock the directus SDK and relevant methods
jest.mock("@directus/sdk", () => {
    return {
        ...jest.requireActual("@directus/sdk"),
        createDirectus: jest.fn().mockImplementation(() => {
            return {
                with: jest.fn().mockReturnThis(),
                staticToken: jest.fn().mockReturnThis(),
                rest: jest.fn().mockReturnThis(),
                request: jest.fn(),
            };
        }),
    };
});

// Mock portalConfig
jest.mock("../../../src/lib/directusdatafetcher", () => {
    return {
        ...jest.requireActual("../../../src/lib/directusdatafetcher"),
        portalConfig: {
            directusUrl: "http://mocked-url",
            directusStaticToken: "mocked-token",
        },
    };
});

describe("FeaturedLinksDataFetcher", () => {
    let fetcher: FeaturedLinksDataFetcher;
    let client: jest.Mocked<RestClient<any>>;

    beforeEach(() => {
        fetcher = new FeaturedLinksDataFetcher();
        client = fetcher.client as jest.Mocked<RestClient<any>>;
    });

    it("should fetch and transform data correctly", async () => {
        const query: landing_page = {
            featured: [1, 2, 3],
            id: 0,
            status: "",
            user_created: "",
            date_created: "",
            user_updated: "",
            date_updated: "",
            logo: "",
            title: "",
            description: "",
            slug: "",
            tagline: null,
            announcements: [],
            documentation: [],
            mission: "",
            vision: ""
        };

        const mockRawLinks: link[] = [
            { id: 10, name: "Link 1", image: "image1.jpg", url: "http://link1.com", user_created: "", date_created: "", user_updated: "", date_updated: "", description: "" },
            { id: 20, name: "Link 2", image: "image2.jpg", url: "http://link2.com", user_created: "", date_created: "", user_updated: "", date_updated: "", description: "" },
            { id: 30, name: "Link 3", image: "image3.jpg", url: "http://link3.com", user_created: "", date_created: "", user_updated: "", date_updated: "", description: "" },
        ];

        client.request
        .mockImplementationOnce((request) => {
                return Promise.resolve([{ links_id: 10 }, { links_id: 20 }, { links_id: 30 }]);
            })
            .mockImplementationOnce((request) => {
                return Promise.resolve(mockRawLinks);
            });

        jest.spyOn(fetcher, "getFileUrl").mockImplementation((uuid: string) => `/api/file-proxy/?uuid=${uuid}`);

        const expectedData = {
            links: [
                { name: "Link 1", imageUrl: "/api/file-proxy/?uuid=image1.jpg", url: "http://link1.com" },
                { name: "Link 2", imageUrl: "/api/file-proxy/?uuid=image2.jpg", url: "http://link2.com" },
                { name: "Link 3", imageUrl: "/api/file-proxy/?uuid=image3.jpg", url: "http://link3.com" },
            ],
        };

        const result = await fetcher.fetch(query);
        expect(result).toEqual(expectedData);
    });
});
