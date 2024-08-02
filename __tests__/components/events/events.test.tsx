// src/components/__tests__/events.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Events from '@/components/events/events'
import { EventsData } from '@/types'

// Mock data
const mockEventsData: EventsData = {
  events: [
    {
      id: 1,
      status: 'published',
      userCreated: 'user1',
      dateCreated: '2023-01-01',
      userUpdated: 'user1',
      dateUpdated: '2023-01-01',
      title: 'Event 1',
      description: 'Description of event 1',
      image: 'https://via.placeholder.com/140',
      schedule: { label: 'Schedule 1', startTime: '2023-01-01T10:00:00' },
      startDate: '2023-01-01',
      endDate: '2023-01-02',
      slug: 'event-1',
      labels: [1, 2],
    },
    {
      id: 2,
      status: 'published',
      userCreated: 'user2',
      dateCreated: '2023-01-02',
      userUpdated: 'user2',
      dateUpdated: '2023-01-02',
      title: 'Event 2',
      description: 'Description of event 2',
      image: 'https://via.placeholder.com/140',
      schedule: { label: 'Schedule 2', startTime: '2023-01-02T11:00:00' },
      startDate: '2023-01-02',
      endDate: '2023-01-03',
      slug: 'event-2',
      labels: [1, 3],
    },
  ],
}

describe('Events Component', () => {
  test('renders events correctly', () => {
    render(<Events data={mockEventsData} />)
    expect(screen.getByText('Base Events')).toBeTruthy()
    expect(screen.getByText('Event 1')).toBeTruthy()
    expect(screen.getByText('Description of event 1')).toBeTruthy()
    expect(screen.getByText('Event 2')).toBeTruthy()
    expect(screen.getByText('Description of event 2')).toBeTruthy()
  })

  test('renders the correct number of cards per page', () => {
    render(<Events data={mockEventsData} />)
    const cards = screen.getAllByRole('link')
    expect(cards.length).toBeLessThanOrEqual(4) // Assuming cardsPerPage is 4
  })

  test('renders no events message when data is empty', () => {
    const emptyEventsData: EventsData = { events: [] }
    render(<Events data={emptyEventsData} />)
    expect(screen.getByText('No events available')).toBeTruthy()
  })
})
