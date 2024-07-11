import React from 'react';
import LandingPageDataFetcher from './datafetcher';
import { LandingPageData, LandingPageQuery } from './types';
import Header from '../../components/header/header';
import FeaturedLinks from '@/components/featuredlinks/featuredlinks';
import Announcements from '@/components/announcements/announcements';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/Navbar';
import Services from '../../components/services/services'
import { Container, Grid } from '@mui/material';


const fetcher = LandingPageDataFetcher.getInstance();

const LandingPage = async ({ params }: { params: { slug: string } }) => {

  const query = {
    slug: params.slug
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query);

  return (
    <div>
      <Navbar data={data.navbar} />
      <div style={{ backgroundColor: '#1a1a1a' }}>

        <Container>
          <Header data={data.header} />
          <FeaturedLinks data={data.featuredLinks} />
        </Container>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Announcements data={data.announcements} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Services data={data.services} />
          </Grid>
        </Grid>
        </Container>
      </div>
      <Container style={{ backgroundColor: 'black' }}>
        <Footer data={data.footer} />
      </Container>
    </div>
  );
};

export default LandingPage;
