import Navbar from '@/components/navbar/Navbar'
import WelcomePageDataFetcher from '@/app/welcomePageDataFetcher'
import { WelcomePageData } from '@/types'

const fetcher = WelcomePageDataFetcher.getInstance()

const Home = async () => {
  const data: WelcomePageData = await fetcher.fetch()
  return (
    <div>
      <Navbar data={data.navbar} />
    </div>
  )
}

export default Home
