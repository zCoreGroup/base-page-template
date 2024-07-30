import Navbar from '@/components/navbar/Navbar'
import HomePageDataFetcher from '@/app/homePageDataFetcher'
import { HomePageData } from '@/types'
import { Box, Container, Typography } from '@mui/material'
import Footer from '@/components/footer/Footer'

const fetcher = HomePageDataFetcher.getInstance()

const Home = async () => {
  const data: HomePageData = await fetcher.fetch()
  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar data={data.navbar} />
      <Typography>Featured Links</Typography>
      <Container>
        <Footer data={data.footer} />
      </Container>
    </Box>
  )
}

export default Home
