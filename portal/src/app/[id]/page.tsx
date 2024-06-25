import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import HeaderDataFetcher from '@/components/header/datafetcher';
import FeaturedLinksDataFetcher from '@/components/featuredlinks/datafetcher';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';

const headerFetcher = new HeaderDataFetcher();
const featuredLinksFetcher = new FeaturedLinksDataFetcher();
const fetcher: LandingPageDataFetcher = new LandingPageDataFetcher(headerFetcher, featuredLinksFetcher);

const LandingPage = async ({ params }: { params: { id: string } }) => {

  const query = {
    id: params.id
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
        <Header data={data.header}/>
        <FeaturedLinks data={data.featuredLinks}/>
    </div>
  );
};

export default LandingPage;