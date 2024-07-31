import FooterDataFetcher from '@/components/footer/dataFetcher'
import DefaultFooterContentDataFetecher from '@/components/footer/defaultFooterContentDataFetcher'
import { DirectusDataFetcher } from '@/lib/directusdatafetcher'

jest.mock('../../../src/lib/directusdatafetcher')
jest.mock('../../../src/components/footer/defaultFooterContentDataFetcher')

describe('FooterDataFetcher', () => {
  let footerDataFetcher: FooterDataFetcher
  let defaultFooterContentFetcherMock: jest.Mocked<DefaultFooterContentDataFetecher>

  beforeEach(() => {
    defaultFooterContentFetcherMock =
      new DefaultFooterContentDataFetecher() as jest.Mocked<DefaultFooterContentDataFetecher>
    footerDataFetcher = new FooterDataFetcher(defaultFooterContentFetcherMock)
  })

  it('should fetch footer data correctly', async () => {
    const mockFooter = {
      id: '1',
      user_created: 'user1',
      date_created: '2023-01-01',
      user_updated: 'user2',
      date_updated: '2023-02-01',
      feedback: 'feedback',
      twitter: 'twitter',
      facebook: 'facebook',
      instagram: 'instagram',
      youtube: 'youtube',
      linkedin: 'linkedin',
      title: 1,
      location: 1,
      flicker: 'flicker',
      information: 'information',
      information_text: 'information_text',
      image: 'image',
      labels: [1, 2, 3],
    }

    const mockLocation = {
      id: 1,
      sort: null,
      user_created: 'user1',
      date_created: '2023-01-01',
      user_updated: 'user2',
      date_updated: '2023-02-01',
      name: 'location',
      address: 'address',
      coordinates: {
        type: 'Point',
        coordinates: [0, 0],
      },
      city: 'city',
      zip: 'zip',
      state: 'state',
      phone: 'phone',
      email: 'email',
      labels: [1, 2, 3],
    }

    const mockDefaultFooterData = {
      footerId: '1',
      quickLinks: [],
      portalLinks: [],
      feedback: 'feedback',
    }

    defaultFooterContentFetcherMock.fetch.mockResolvedValue(mockDefaultFooterData)

    const clientMock = ((DirectusDataFetcher.prototype as any).client = {
      request: jest
        .fn()
        .mockImplementationOnce(() => {
          return [mockFooter]
        })
        .mockImplementationOnce(() => {
          return [mockLocation]
        }),
    })

    const result = await footerDataFetcher.fetch()

    expect(clientMock.request).toHaveBeenCalledTimes(2)
    expect(result).toEqual({
      streetAddress: mockLocation.address,
      city: mockLocation.city,
      state: mockLocation.state,
      zip: mockLocation.zip,
      phone: mockLocation.phone,
      email: mockLocation.email,
      informationTitle: mockFooter.information,
      informationText: mockFooter.information_text,
      linkFB: mockFooter.facebook,
      linkX: mockFooter.twitter,
      linkIG: mockFooter.instagram,
      linkYT: mockFooter.youtube,
      baseMapImage: footerDataFetcher.getFileUrl(mockFooter.image),
      quickLinks: mockDefaultFooterData.quickLinks,
      guardianPortal: mockDefaultFooterData.portalLinks,
      feedback: mockDefaultFooterData.feedback,
    })
  })
})
