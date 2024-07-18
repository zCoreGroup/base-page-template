import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from '../../types';
import Banner from '../../components/banner/banner';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';
import Announcements from '@/components/announcements/announcements';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/Navbar';
import { Container } from '@mui/material';


const fetcher = LandingPageDataFetcher.getInstance();

const LandingPage = async ({ params }: { params: { slug: string } }) => {

  const query = {
    slug: params.slug
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
      <Navbar data={data.navbar} />
      <div style={{ backgroundColor: '#ebebeb' }}>

        <Container>
          <Banner data={data.header} />
          <FeaturedLinks data={data.featuredLinks} />
          <Announcements data={data.announcements} />
        </Container>
      </div>
      <Container style={{ backgroundColor: 'black' }}>
        <Footer data={data.footer} />
      </Container>
    </div>
  );
};

export default LandingPage;
