// EventCardSection.test.tsx

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import EventCardSection, { EventItem } from '@/components/event-card/EventCardSection'
import Image from 'next/image'

// Define types for the mock components' props
interface EventCardProps {
  title: string
  description: string
  image: string
}

interface CustomIndicatorProps {
  length: number
  activeIndex: number
  onClick: (index: number) => void
}

// Mock EventCard component
jest.mock('../../../src/components/event-card/EventCard', () => {
  const MockEventCard: React.FC<EventCardProps> = ({ title, description, image }) => (
    <div>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
  MockEventCard.displayName = 'MockEventCard'
  return MockEventCard
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

describe('EventCardSection', () => {
  const eventItems: EventItem[] = [
    { id: '1', title: 'Event 1', description: 'Description 1', image: '/images/event1.jpg' },
    { id: '2', title: 'Event 2', description: 'Description 2', image: '/images/event2.jpg' },
    { id: '3', title: 'Event 3', description: 'Description 3', image: '/images/event3.jpg' },
    { id: '4', title: 'Event 4', description: 'Description 4', image: '/images/event4.jpg' },
  ]

  test('renders CustomIndicator buttons', () => {
    render(<EventCardSection eventItems={eventItems} minCardHeight={100} />)

    // Check if the CustomIndicator is rendered by querying for buttons
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0) // Ensure buttons are present indicating the custom indicator
  })
})
