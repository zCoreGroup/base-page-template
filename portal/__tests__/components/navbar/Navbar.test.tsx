import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/navbar/Navbar';
import { NavbarData } from '@/components/navbar/types';

const mockData: NavbarData = {
    logo: '/test-logo.png',
    logoAlt: 'Test Logo',
    links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
    ],
    notificationsCount: 3,
    user: {
        name: '',
        avatarUrl: ''
    },
    doctrine: '',
    news: '',
    csoCorner: '',
    multimedia: ''
};

describe('Navbar', () => {
  it('renders the logo with correct alt text', () => {
    render(<Navbar data={mockData} />);
    const logo = screen.getByAltText(mockData.logoAlt);
    expect(logo).toBeInTheDocument();
  });

  it('renders the left and right links correctly', () => {
    render(<Navbar data={mockData} />);

    // Check if all links are rendered
    mockData.links.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link.url);
    });
  });

  it('renders the notification icon with correct badge count', () => {
    render(<Navbar data={mockData} />);
    const badge = screen.getByText(mockData.notificationsCount);
    expect(badge).toBeInTheDocument();
  });

  it('renders the search icon and account icon', () => {
    render(<Navbar data={mockData} />);
    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
    expect(screen.getByTestId('AccountCircleIcon')).toBeInTheDocument();
  });
});
