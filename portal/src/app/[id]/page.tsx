import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';

const fetcher: LandingPageDataFetcher = new LandingPageDataFetcher();

const LandingPage = async ({ params }: { params: { id: string } }) => {

  const query = {
    id: params.id
  } as LandingPageQuery

  const data: LandingPageData = fetcher.fetch(query);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default LandingPage;