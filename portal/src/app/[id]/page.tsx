import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import HeaderDataFetcher from '@/components/header/datafetcher';
import FeaturedLinksDataFetcher from '@/components/featuredlinks/datafetcher';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';
import Announcements from '@/components/announcements/announcements';
import AnnouncementsDataFetcher from '@/components/announcements/datafetcher';

const headerFetcher = new HeaderDataFetcher();
const featuredLinksFetcher = new FeaturedLinksDataFetcher();
const announcementsFetcher = new AnnouncementsDataFetcher();

const fetcher: LandingPageDataFetcher = new LandingPageDataFetcher(headerFetcher, featuredLinksFetcher, announcementsFetcher);

const LandingPage = async ({ params }: { params: { id: string } }) => {

  const query = {
    id: params.id
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
        <Header data={data.header}/>
        <FeaturedLinks data={data.featuredLinks} />
        <Announcements data={data.announcements} />
    </div>
  );
};

export default LandingPage;