import { DirectusDataFetcher, footer, landing_page, location } from "@/lib/directusdatafetcher";
import { FooterData } from "@/types";
import { readItems } from "@directus/sdk";

export default class HeaderDataFetcher extends DirectusDataFetcher {

    async fetch(landing_page: landing_page): Promise<FooterData> {


        const footer = await this.getFooter(landing_page.footer);
        const location = await this.getLocation(footer.location);
        console.log(footer, location);


        return {
            title1: "Contact",
            streetAddress: "1234 Elm street",
            cityState: "Springfield, IL 62704 USA",
            phone: "tel:+1(805)606-1110",
            phone1: "+1(805)606-1110",
            email: "mailto:SLD30.PA.Workflow@us.af.mil",
            email1: "SLD30.PA.Workflow@us.af.mil",
            title2: "Hours of Operations",
            hoursMon: "Mon-Fri: 6am-6pm",
            hoursSat: "Sat: 8am-4pm",
            hoursSun: "Sun: 10am-4pm",
            hours2: "Holiday Closures: Thanksgiving Day and Christmas Day",
            hours3: "After Hour Passes: Visitors needing a visitor pass after hours can receive a 24 hour pass at the Santa Maria gate, (located on California Bivd. at the intersection with HWY1)",
            title3: "Got feedback?",
            feedback: "For any feedback or suggestions, please reach out to us at: feedback@guardianone.us /n Your insights help us improve!",
            title4: "Get Connected",
            linkFB: "https://www.facebook.com/SLD30/",
            linkX: "https://x.com/sldelta30",
            linkIG: "https://www.instagram.com/vandenberg_sfb/",
            linkYT: "https://www.youtube.com/user/30SWVandenberg"
        }
    }

    async getFooter(id: string): Promise<footer> {
        const footer = await this.client.request(readItems('footer', {
            filter: {
                id : {
                    _eq: id
                }
            }
        }));
        return footer[0];
    }

    async getLocation(id: number): Promise<location> {
        const location = await this.client.request(readItems('locations', {
            filter: {
                id : {
                    _eq: id
                }
            }
        }));
        return location[0];
    }
}