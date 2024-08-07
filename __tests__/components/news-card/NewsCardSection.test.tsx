// NewsCardSection.test.tsx

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NewsCardSection, { NewsItem } from '@/components/news-card/NewsCardSection'
import Image from 'next/image'

// Define types for the mock components' props
interface NewsCardProps {
  title: string
  description: string
  image: string
}

interface CustomIndicatorProps {
  length: number
  activeIndex: number
  onClick: (index: number) => void
}

// Mock NewsCard component
jest.mock('../../../src/components/news-card/NewsCard', () => {
  const MockNewsCard: React.FC<NewsCardProps> = ({ title, description, image }) => (
    <div>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
  MockNewsCard.displayName = 'MockNewsCard'
  return MockNewsCard
})

// Mock CustomIndicator component
jest.mock('../../../src/components/announcements/customindicator', () => {
  const MockCustomIndicator: React.FC<CustomIndicatorProps> = ({ length = 1, activeIndex, onClick }) => {
    const validLength = Number.isInteger(length) && length > 0 ? length : 1

    return (
      <div>
        {Array.from({ length: validLength }, (_, index) => (
          <button key={index} onClick={() => onClick(index + 1)}>
            {activeIndex === index + 1 ? `Active ${index + 1}` : `Page ${index + 1}`}
          </button>
        ))}
      </div>
    )
  }
  MockCustomIndicator.displayName = 'MockCustomIndicator'
  return MockCustomIndicator
})

describe('NewsCardSection', () => {
  const newsItems: NewsItem[] = [
    { id: '1', title: 'News 1', description: 'Description 1', image: '/images/news1.jpg' },
    { id: '2', title: 'News 2', description: 'Description 2', image: '/images/news2.jpg' },
    { id: '3', title: 'News 3', description: 'Description 3', image: '/images/news3.jpg' },
    { id: '4', title: 'News 4', description: 'Description 4', image: '/images/news4.jpg' },
  ]

  test('renders NewsCardSection component with visible cards and indicators', () => {
    render(<NewsCardSection newsItems={newsItems} minCardWidth={200} />)
    // Check if the CustomIndicator is rendered by querying for buttons
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0) // Ensure buttons are present indicating the custom indicator
  })
})
