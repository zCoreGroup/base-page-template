import Navbar from '@/components/navbar/Navbar'
import HomePageDataFetcher from '@/app/homePageDataFetcher'
import { HomePageData } from '@/types'
import { Box, Grid } from '@mui/material'
import Footer from '@/components/footer/Footer'
import FeaturedLinks from '@/components/featured-links/FeaturedLinks'
import React from 'react'
import NewsCard from '@/components/news-card/NewsCard'
import EventCard from '@/components/event-card/EventCard'

const fetcher = HomePageDataFetcher.getInstance()

const Home = async () => {
  const data: HomePageData = await fetcher.fetch()
  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar data={data.navbar} />
      <Box sx={{ flex: 1, py: 4 }}>
        <FeaturedLinks data={data.featuredLinks} />
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            {/* TODO: Need to add pagination to NewsCard*/}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <NewsCard />
              <NewsCard />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <EventCard />
              <EventCard />
              <EventCard />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer data={data.footer} />
    </Box>
  )
}

export default Home
