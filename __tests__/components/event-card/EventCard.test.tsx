// EventCard.test.js

import React from 'react'
import { render } from '@testing-library/react'
import EventCard from '@/components/event-card/EventCard'

describe('EventCard', () => {
  test('renders EventCard component', () => {
    const { getByRole, getAllByText, getByAltText } = render(<EventCard />)

    // Check if the title is in the document
    const titleElements = getAllByText(/Lizard/i)
    expect(titleElements.length).toBeGreaterThan(0) // Ensure at least one element matches
    expect(titleElements[0]).toBeTruthy() // Basic truthy check for the first element

    // Check if the buttons are in the document
    const shareButton = getByRole('button', { name: /share/i })
    expect(shareButton).toBeTruthy() // Basic truthy check

    const learnMoreButton = getByRole('button', { name: /learn more/i })
    expect(learnMoreButton).toBeTruthy() // Basic truthy check
  })
})
