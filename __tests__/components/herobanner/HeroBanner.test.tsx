import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { HeroBannerData } from '@/types'
import HeroBanner from '@/components/herobanner/HeroBanner'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, ...props }: any) => {
    if (fill) {
      return <img data-testid='next-image' {...props} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    }
    return <img data-testid='next-image' {...props} />
  },
}))

const mockData: HeroBannerData = {
  images: [
    {
      id: '1',
      source: 'image1-uuid',
      title: 'Title 1',
      heading: 'Heading 1',
      subheading: 'Subheading 1',
      imgCaption: 'Caption 1',
    },
    {
      id: '2',
      source: 'image2-uuid',
      title: 'Title 2',
      heading: 'Heading 2',
      subheading: 'Subheading 2',
      imgCaption: 'Caption 2',
    },
    {
      id: '3',
      source: 'image3-uuid',
      title: 'Title 3',
      heading: 'Heading 3',
      subheading: 'Subheading 3',
      imgCaption: 'Caption 3',
    },
  ],
}

describe('HeroBanner', () => {
  afterEach(cleanup)
  describe('HeroBanner', () => {
    afterEach(cleanup)

    it('renders the main image and text overlay', () => {
      render(<HeroBanner data={mockData} />)
      const mainImage = screen.getByAltText(mockData.images[0].title)
      const title = screen.getByText(mockData.images[0].title)
      const heading = screen.getByText(mockData.images[0].heading)
      const subheading = screen.getByText(mockData.images[0].subheading)

      expect(mainImage).toBeInTheDocument()
      expect(mainImage).toHaveAttribute('src', `/api/file-proxy?uuid=${encodeURIComponent(mockData.images[0].source)}`)
      expect(title).toBeInTheDocument()
      expect(heading).toBeInTheDocument()
      expect(subheading).toBeInTheDocument()
    })

    it('renders thumbnails with captions', () => {
      render(<HeroBanner data={mockData} />)
      mockData.images.forEach((image, index) => {
        const thumbnail = screen.getByAltText(`thumbnail ${index}`)
        const caption = screen.getByText(image.imgCaption)
        expect(thumbnail).toBeInTheDocument()
        expect(thumbnail).toHaveAttribute('src', `/api/file-proxy?uuid=${encodeURIComponent(image.source)}`)
        expect(caption).toBeInTheDocument()
      })
    })

    it('updates the main image and text overlay when a thumbnail is clicked', () => {
      render(<HeroBanner data={mockData} />)
      const secondThumbnail = screen.getByAltText('thumbnail 1')
      fireEvent.click(secondThumbnail)

      const mainImage = screen.getByAltText(mockData.images[1].title)
      const title = screen.getByText(mockData.images[1].title)
      const heading = screen.getByText(mockData.images[1].heading)
      const subheading = screen.getByText(mockData.images[1].subheading)

      expect(mainImage).toHaveAttribute('src', `/api/file-proxy?uuid=${encodeURIComponent(mockData.images[1].source)}`)
      expect(title).toBeInTheDocument()
      expect(heading).toBeInTheDocument()
      expect(subheading).toBeInTheDocument()
    })

    // ... rest of the tests
  })

  it('renders the correct number of thumbnails', () => {
    render(<HeroBanner data={mockData} />)
    const thumbnails = screen.getAllByRole('img')
    expect(thumbnails.length).toBe(mockData.images.length + 1) // +1 for the main image
  })

  it('applies the correct styles to the active thumbnail', () => {
    render(<HeroBanner data={mockData} />)
    const firstThumbnail = screen.getByAltText('thumbnail 0')
    const secondThumbnail = screen.getByAltText('thumbnail 1')

    expect(firstThumbnail.parentElement).toHaveStyle('border: 2px solid white')
    expect(secondThumbnail.parentElement).toHaveStyle('border: 1px solid black')

    fireEvent.click(secondThumbnail)

    expect(secondThumbnail.parentElement).toHaveStyle('border: 2px solid white')
    expect(firstThumbnail.parentElement).toHaveStyle('border: 1px solid black')
  })
})
