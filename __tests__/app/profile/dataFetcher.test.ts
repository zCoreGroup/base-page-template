import ProfilePageDataFetcher from '../../../src/app/profile/dataFetcher'
import NavbarDataFetcher from '@/components/navbar/navbarDataFetcher'
import FooterDataFetcher from '@/components/footer/dataFetcher'
import { NavbarData, FooterData } from '@/types'
import DefaultFooterContentDataFetcher from '@/components/footer/defaultFooterContentDataFetcher'

// Mock the dependencies
jest.mock('../../../src/components/navbar/navbarDataFetcher')
jest.mock('../../../src/components/footer/dataFetcher')
jest.mock('../../../src/components/footer/defaultFooterContentDataFetcher')

describe('ProfilePageDataFetcher', () => {
  let profilePageDataFetcher: ProfilePageDataFetcher
  let mockNavbarFetcher: jest.Mocked<NavbarDataFetcher>
  let mockFooterFetcher: jest.Mocked<FooterDataFetcher>
  let mockDefaultFooterContentFetcher: jest.Mocked<DefaultFooterContentDataFetcher>

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks()

    mockNavbarFetcher = new NavbarDataFetcher() as jest.Mocked<NavbarDataFetcher>
    mockFooterFetcher = new FooterDataFetcher(mockDefaultFooterContentFetcher) as jest.Mocked<FooterDataFetcher>

    profilePageDataFetcher = new ProfilePageDataFetcher(mockNavbarFetcher, mockFooterFetcher)
  })

  it('should fetch profile page data successfully', async () => {
    const mockNavbarData: NavbarData = {
      leftLinks: [],
      rightLinks: [],
      logo: 'logo.png',
      logoAlt: 'Logo',
      notificationsCount: 0,
      user: { name: 'Test User', avatarUrl: 'avatar.png' },
    }
    const mockFooterData: FooterData = {
      streetAddress: '123 Test St',
      city: 'Test City',
      state: 'TS',
      zip: '12345',
      phone: '123-456-7890',
      email: 'test@example.com',
      informationTitle: 'Info',
      informationText: 'Test info',
      linkFB: 'fb.com',
      linkX: 'x.com',
      linkIG: 'ig.com',
      linkYT: 'yt.com',
      baseMapImage: 'map.png',
      quickLinks: [],
      guardianPortal: [],
      feedback: 'feedback',
    }

    mockNavbarFetcher.fetch.mockResolvedValue(mockNavbarData)
    mockFooterFetcher.fetch.mockResolvedValue(mockFooterData)

    const result = await profilePageDataFetcher.fetch()

    expect(result).toEqual({
      navbar: mockNavbarData,
      footer: mockFooterData,
    })
    expect(mockNavbarFetcher.fetch).toHaveBeenCalledTimes(1)
    expect(mockFooterFetcher.fetch).toHaveBeenCalledTimes(1)
  })

  it('should throw an error if navbar fetch fails', async () => {
    mockNavbarFetcher.fetch.mockRejectedValue(new Error('Navbar fetch failed'))
    mockFooterFetcher.fetch.mockResolvedValue({} as FooterData)

    await expect(profilePageDataFetcher.fetch()).rejects.toThrow('Navbar fetch failed')
  })

  it('should throw an error if footer fetch fails', async () => {
    mockNavbarFetcher.fetch.mockResolvedValue({} as NavbarData)
    mockFooterFetcher.fetch.mockRejectedValue(new Error('Footer fetch failed'))

    await expect(profilePageDataFetcher.fetch()).rejects.toThrow('Footer fetch failed')
  })

  it('should timeout if a fetch takes too long', async () => {
    jest.useFakeTimers()
    mockNavbarFetcher.fetch.mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 11000)))
    mockFooterFetcher.fetch.mockResolvedValue({} as FooterData)

    const fetchPromise = profilePageDataFetcher.fetch()
    jest.advanceTimersByTime(10001)

    await expect(fetchPromise).rejects.toThrow('Request timed out')

    jest.useRealTimers()
  })

  it('should return a singleton instance', () => {
    const instance1 = ProfilePageDataFetcher.getInstance()
    const instance2 = ProfilePageDataFetcher.getInstance()

    expect(instance1).toBe(instance2)
  })
})
