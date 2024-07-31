// __tests__/components/announcements/announcements.test.tsx
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Announcements from '@/components/announcements/announcements'
import { AnnouncementsData } from '@/types'

export const mockAnnouncementsData: AnnouncementsData = {
  articles: [
    {
      title: 'Announcement 1',
      body: 'This is the first announcement.',
      image: 'https://via.placeholder.com/150',
      dateCreated: '2023-01-01T00:00:00Z',
    },
    {
      title: 'Announcement 2',
      body: 'This is the second announcement.',
      image: 'https://via.placeholder.com/150',
      dateCreated: '2023-02-01T00:00:00Z',
    },
  ],
}

// Ensure the mock for Carousel is used
jest.mock('react-material-ui-carousel')

describe('Announcements Component', () => {
  it('renders without crashing', () => {
    render(<Announcements data={mockAnnouncementsData} />)
    expect(screen.getByText('Announcements')).toBeInTheDocument()
  })

  it('displays the correct number of announcement items', async () => {
    render(<Announcements data={mockAnnouncementsData} />)

    const items = await screen.findAllByRole('img')
    expect(items.length).toBe(mockAnnouncementsData.articles.length)
  })

  it('displays announcement titles and bodies correctly', async () => {
    render(<Announcements data={mockAnnouncementsData} />)

    await waitFor(() => {
      mockAnnouncementsData.articles.forEach((article) => {
        expect(screen.getByText(article.title)).toBeInTheDocument()
        const bodyStripped = article.body
          .replace(/<\/?[^>]+(>|$)/g, '')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
        expect(screen.getByText(bodyStripped)).toBeInTheDocument()
      })
    })
  })

  it('changes active index on indicator click', async () => {
    render(<Announcements data={mockAnnouncementsData} />)

    const customIndicator = await screen.findByTestId('custom-indicator-1')
    fireEvent.click(customIndicator)
    await waitFor(() => {
      expect(screen.getByTestId('active-index')).toHaveTextContent('1')
    })
  })
})
