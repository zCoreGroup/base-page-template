import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import HeaderDataFetcher from '@/components/header/datafetcher';

const headerFetcher = new HeaderDataFetcher();
const fetcher: LandingPageDataFetcher = new LandingPageDataFetcher(headerFetcher);

const LandingPage = async ({ params }: { params: { id: string } }) => {

  const query = {
    id: params.id
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
        <Header data={data.header}/>
    </div>
  );
};

export default LandingPage;