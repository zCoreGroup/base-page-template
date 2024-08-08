import React from 'react'

import { LandingPageData, LandingPageQuery } from '@/types'
import Banner from '../../components/banner/banner'
import Announcements from '@/components/announcements/announcements'
import Events from '@/components/events/events'
import { Container, Grid } from '@mui/material'
import LandingPageFeaturedLinks from '@/components/landingPageFeaturedLinks/landingPageFeaturedLinks'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import LandingPageDataFetcher from '@/app/[slug]/dataFetcher'
import BreadCrumbs from '@/components/breadcrumbs/breadCrumb'

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
          <BreadCrumbs data={data.breadcrumbs} />
          <Banner data={data.banner} />
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Announcements data={data.announcements} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LandingPageFeaturedLinks data={data.featuredLinks} />
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
