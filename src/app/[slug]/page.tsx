import React from 'react'
import LandingPageDataFetcher from './datafetcher'
import { LandingPageData, LandingPageQuery } from '../../types'
import Banner from '../../components/banner/banner'
import FeaturedLinks from '@/components/featuredlinks/featuredlinks'
import Announcements from '@/components/announcements/announcements'
import Events from '@/components/events/events'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/services'
import { Container, Grid } from '@mui/material'

const fetcher = LandingPageDataFetcher.getInstance()

const LandingPage = async ({ params }: { params: { slug: string } }) => {
  const query = {
    slug: params.slug,
  } as LandingPageQuery

  const data: LandingPageData = await fetcher.fetch(query)

  return (
    <div>
      <Navbar data={data.navbar} />
      <div style={{ backgroundColor: '#ebebeb' }}>
        <Container>
          <Banner data={data.banner} />
          <FeaturedLinks data={data.featuredLinks} />
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Announcements data={data.announcements} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Services data={data.featuredLinks} />
            </Grid>
          </Grid>
          <Events data={data.events} />
        </Container>
      </div>
      <Footer data={data.footer} />
    </div>
  )
}

export default LandingPage