import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/navbar/Navbar'
import { NavbarData } from '@/types'

const mockData: NavbarData = {
  leftLinks: [
    { name: 'Doctrine', url: '#' },
    { name: 'News', url: '#' },
  ],
  rightLinks: [
    { name: 'CSO Corner', url: '#' },
    { name: 'Multimedia', url: '#' },
  ],
  logo: '/path/to/logo.png',
  logoAlt: 'Guardian One Logo',
  notificationsCount: 4,
  user: {
    name: '',
    avatarUrl: '',
  },
}

describe('Navbar', () => {
  test('renders Navbar component with links and logo', () => {
    render(<Navbar data={mockData} />)

    // Check if left links are rendered
    mockData.leftLinks.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument()
    })

    // Check if right links are rendered
    mockData.rightLinks.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument()
    })

    // Check if logo is rendered
    const logo = screen.getByAltText(mockData.logoAlt)
    expect(logo).toBeInTheDocument()

    // Check if notification count is rendered
    expect(screen.getByText(mockData.notificationsCount.toString())).toBeInTheDocument()
  })
})
