import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import HeaderDataFetcher from '@/components/header/datafetcher';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';
import FeaturedLinksDataFetcher from '@/components/featuredlinks/datafetcher';
import Footer from '../../components/footer/footer';
import FooterDataFetcher from '@/components/footer/datafetcher';

const headerFetcher = new HeaderDataFetcher();
const footerFetcher = new FooterDataFetcher();
const featuredLinksFetcher = new FeaturedLinksDataFetcher();
const fetcher: LandingPageDataFetcher = new LandingPageDataFetcher(headerFetcher, featuredLinksFetcher, footerFetcher);

const LandingPage = async ({ params }: { params: { id: string } }) => {

  const query = {
    id: params.id
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
        <Header data={data.header}/>
        <FeaturedLinks data={data.featuredLinks}/>
        <Footer data={data.footer}/>
    </div>
  );
};

export default LandingPage;