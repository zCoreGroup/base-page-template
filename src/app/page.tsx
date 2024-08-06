import Navbar from '@/components/navbar/Navbar'
import HomePageDataFetcher from '@/app/homePageDataFetcher'
import { HomePageData } from '@/types'
import { Box, Container, Grid } from '@mui/material'
import Footer from '@/components/footer/Footer'
import FeaturedLinks from '@/components/featured-links/FeaturedLinks'
import NewsCardSection, { NewsItem } from '@/components/news-card/NewsCardSection'
import EventCardSection, { EventItem } from '@/components/event-card/EventCardSection'
import HeroBanner from '@/components/herobanner/HeroBanner'

export const dynamic = 'force-dynamic'

const fetcher = HomePageDataFetcher.getInstance()

const Home = async () => {
  const data: HomePageData = await fetcher.fetch()
  const newsItems: NewsItem[] = [
    { id: '1', title: 'News 1', description: 'News desc 1', image: '' },
    { id: '2', title: 'News 2', description: 'News desc 2', image: '' },
    { id: '3', title: 'News 3', description: 'News desc 3', image: '' },
    { id: '4', title: 'News 4', description: 'News desc 4', image: '' },
    { id: '5', title: 'News 5', description: 'News desc 5', image: '' },
  ]
  const eventItems: EventItem[] = [
    { id: '1', title: 'Event 1', description: 'Event desc 1', image: '' },
    { id: '2', title: 'Event 2', description: 'Event desc 2', image: '' },
    { id: '3', title: 'Event 3', description: 'Event desc 3', image: '' },
    { id: '4', title: 'Event 4', description: 'Event desc 4', image: '' },
    { id: '5', title: 'Event 5', description: 'Event desc 5', image: '' },
  ]
  return (
    <Box
      data-testid={'home-page-main-box'}
      sx={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar data={data.navbar} />
      <Box sx={{ flex: 1, py: 4, backgroundColor: 'white' }}>
        <Container maxWidth={'xl'}>
          <Box sx={{ pb: { xs: 10, md: 2 } }}>
            <HeroBanner data={data.heroBanner} />
            <FeaturedLinks data={data.featuredLinks} />
          </Box>
          <Grid container spacing={4} sx={{ mt: 2, pt: 4 }}>
            <Grid item xs={12} md={8}>
              <NewsCardSection newsItems={newsItems} minCardWidth={200} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 600, pb: 10 }}>
                <EventCardSection eventItems={eventItems} minCardHeight={200} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer data={data.footer} />
    </Box>
  )
}

export default Home
