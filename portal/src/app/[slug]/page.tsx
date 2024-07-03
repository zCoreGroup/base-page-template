import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';
import Announcements from '@/components/announcements/announcements';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/Navbar';


const fetcher = LandingPageDataFetcher.getInstance();

const LandingPage = async ({ params }: { params: { slug: string } }) => {

  const query = {
    slug: params.slug
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
        <Navbar data={data.navbar}/>
        <Header data={data.header}/>
        <FeaturedLinks data={data.featuredLinks} />
        <Announcements data={data.announcements} />
        <Footer data={data.footer}/>
    </div>
  );
};

export default LandingPage;
