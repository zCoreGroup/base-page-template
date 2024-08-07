import { NextRequest, NextResponse } from 'next/server'
import { ProfilePageData } from '@/types'

// Mock the ProfilePageDataFetcher
const mockFetch = jest.fn()
jest.mock('../../../../src/app/profile/dataFetcher', () => ({
  getInstance: jest.fn().mockReturnValue({
    fetch: mockFetch,
  }),
}))

// Mock NextRequest and NextResponse
jest.mock('next/server', () => ({
  NextRequest: class {
    constructor(public url: string) {}
  },
  NextResponse: {
    json: jest.fn(),
  },
}))

describe('Profile API Route', () => {
  let GET: (req: NextRequest) => Promise<NextResponse>

  beforeAll(async () => {
    const mod = await import('../../../../src/app/api/profile/route')
    GET = mod.GET
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return profile page data with 200 status on successful fetch', async () => {
    const mockProfileData: ProfilePageData = {
      navbar: {
        leftLinks: [],
        rightLinks: [],
        logo: 'test-logo.png',
        logoAlt: 'Test Logo',
        notificationsCount: 0,
        user: {
          name: 'Test User',
          avatarUrl: 'test-avatar.png',
        },
      },
      footer: {
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        informationTitle: '',
        informationText: '',
        linkFB: '',
        linkX: '',
        linkIG: '',
        linkYT: '',
        baseMapImage: '',
        quickLinks: [],
        guardianPortal: [],
        feedback: '',
        default: true,
      },
    }

    mockFetch.mockResolvedValueOnce(mockProfileData)

    const req = new NextRequest('http://localhost/api/profile')
    await GET(req)

    expect(mockFetch).toHaveBeenCalled()
    expect(NextResponse.json).toHaveBeenCalledWith(mockProfileData, { status: 200 })
  })

  it('should return error message with 500 status on fetch failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Fetch failed'))

    const req = new NextRequest('http://localhost/api/profile')
    await GET(req)

    expect(mockFetch).toHaveBeenCalled()
    expect(NextResponse.json).toHaveBeenCalledWith({ error: 'Failed to fetch the profile page data' }, { status: 500 })
  })
})
