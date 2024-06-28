import React from 'react';
import { render } from '@testing-library/react';
import Footer from '@/components/footer/footer';
import { FooterData } from '@/components/footer/types';

describe('Footer', () => {
    const data: FooterData = {
        title1: "Contact",
        streetAddress: "1234 Elm street",
        cityState: "Springfield, IL 62704 USA",
        phone: "+1(805)606-1110",
        email: "SLD30.PA.Workflow@us.af.mil",
        title2: "Hours of Operations",
        hoursMon: "Mon-Fri: 6am-6pm",
        hoursSat: "Sat: 8am-4pm",
        hoursSun: "Sun: 10am-4pm",
        hours2: "Holiday Closures: Thanksgiving Day and Christmas Day",
        hours3: "After Hour Passes: Visitors needing a visitor pass after hours can receive a 24 hour pass at the Santa Maria gate, (located on California Bivd. at the intersection with HWY1)",
        title3: "Got feedback?",
        feedback: "For any feedback or suggestions, please reach out to us at: feedback@guardianone.us /n Your insights help us improve!",
        title4: "Get Connected",
        linkFB: "#",
        linkX: "#",
        linkIG: "#",
        linkYT: "#"
    };

    it('renders the titles, subtitles, and links correctly', () => {
        const { getByText } = render(<Footer data={data} />);
        expect(getByText(data.title1)).toBeInTheDocument();
        expect(getByText(data.streetAddress)).toBeInTheDocument();
        expect(getByText(data.cityState)).toBeInTheDocument();
        expect(getByText(data.phone)).toBeInTheDocument();
        expect(getByText(data.email)).toBeInTheDocument();
        expect(getByText(data.title2)).toBeInTheDocument();
        expect(getByText(data.hoursMon)).toBeInTheDocument();
        expect(getByText(data.hoursSat)).toBeInTheDocument();
        expect(getByText(data.hoursSun)).toBeInTheDocument();
        expect(getByText(data.hours2)).toBeInTheDocument();
        expect(getByText(data.hours3)).toBeInTheDocument();
        expect(getByText(data.title3)).toBeInTheDocument();
        expect(getByText(data.feedback)).toBeInTheDocument();
        expect(getByText(data.title4)).toBeInTheDocument();
        expect(getByText(data.linkFB)).toBeInTheDocument();
        expect(getByText(data.linkX)).toBeInTheDocument();
        expect(getByText(data.linkIG)).toBeInTheDocument();
        expect(getByText(data.linkYT)).toBeInTheDocument();
      });
    });