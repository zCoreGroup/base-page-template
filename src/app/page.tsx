import Navbar from '@/components/navbar/Navbar'
import HomePageDataFetcher from '@/app/homePageDataFetcher'
import { HomePageData } from '@/types'
import { Box, Container, Grid } from '@mui/material'
import Footer from '@/components/footer/Footer'
import FeaturedLinks from '@/components/featured-links/FeaturedLinks'
import EventCard from '@/components/event-card/EventCard'
import NewsCardSection, { NewsItem } from '@/components/news-card/NewsCardSection'

const fetcher = HomePageDataFetcher.getInstance()

const Home = async () => {
  const data: HomePageData = await fetcher.fetch()
  const newsItems: NewsItem[] = [
    { id: '1', title: 'title', description: 'desc', image: '' },
    {
      id: '2',
      title: 'title',
      description: 'desc',
      image: '',
    },
    { id: '3', title: 'title', description: 'desc', image: '' },
    {
      id: '4',
      title: 'title',
      description: 'desc',
      image: '',
    },
    { id: '5', title: 'title', description: 'desc', image: '' },
  ]
  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar data={data.navbar} />
      <Box sx={{ flex: 1, py: 4, backgroundColor: 'white' }}>
        <Container maxWidth={'xl'}>
          <FeaturedLinks data={data.featuredLinks} />
          <Grid container spacing={4} sx={{ mt: 4, pt: 4 }}>
            <Grid item xs={12} md={8}>
              <NewsCardSection newsItems={newsItems} minCardWidth={200} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <EventCard />
                <EventCard />
                <EventCard />
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
