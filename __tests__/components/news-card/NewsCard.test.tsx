// NewsCard.test.tsx

import React from 'react'
import { render, screen } from '@testing-library/react'
import NewsCard from '@/components/news-card/NewsCard'

describe('NewsCard', () => {
  test('renders NewsCard component with image, title, description, and buttons', () => {
    render(<NewsCard />)

    // Check if the title is rendered
    const titles = screen.getAllByText(/Space Force Ceremony/i)
    expect(titles.length).toBeGreaterThan(0) // Check if at least one title is present

    // Check if the description is rendered
    const description = screen.getByText(/U.S. Space Force Col. Jack D. Fulmer II/i)
    expect(description).toBeTruthy() // Check if the description is present

    // Check if the buttons are rendered
    const shareButton = screen.getByRole('button', { name: /share/i })
    expect(shareButton).toBeTruthy() // Check if the "Share" button is present

    const learnMoreButton = screen.getByRole('button', { name: /learn-more-button/i })
    expect(learnMoreButton).toBeTruthy() // Check if the "Learn More" button is present
  })
})
