import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import HeaderDataFetcher from '@/components/header/datafetcher';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';
<<<<<<< HEAD
import Navbar from '@/components/navbar/Navbar'; // wip


=======
import FeaturedLinksDataFetcher from '@/components/featuredlinks/datafetcher';
import Footer from '../../components/footer/footer';
import FooterDataFetcher from '@/components/footer/datafetcher';
>>>>>>> fc966d5f0395f591719845c325ed2d89d0595f58

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
        <Navbar data={data.navbar}/>
        <Header data={data.header}/>
        <FeaturedLinks data={data.featuredLinks}/>
        <Footer data={data.footer}/>
    </div>
  );
};

export default LandingPage;
