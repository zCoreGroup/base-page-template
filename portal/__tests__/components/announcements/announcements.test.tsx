// components/announcements.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Announcements from '@/components/announcements/announcements';
import { AnnouncementsData } from "@/types";

const mockData: AnnouncementsData = {
  announcements: [
    {
      title: 'Test Announcement 1',
      description: 'Description for test announcement 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Test Announcement 2',
      description: 'Description for test announcement 2',
      image: 'https://via.placeholder.com/150',
    },
  ],
};

describe('Announcements Component', () => {
  it('should render the component with data', () => {
    render(<Announcements data={mockData} />);
    
    expect(screen.getByText('Announcements')).toBeTruthy();
    expect(screen.getByText('Test Announcement 1')).toBeTruthy();
    expect(screen.getByText('Description for test announcement 1')).toBeTruthy();
    expect(screen.getByText('Test Announcement 2')).toBeTruthy();
    expect(screen.getByText('Description for test announcement 2')).toBeTruthy();
  });

  it('should change active slide when clicking on custom indicators', () => {
    const { container } = render(<Announcements data={mockData} />);
    
    const indicators = container.querySelectorAll('.MuiButton-text');
    expect(indicators.length).toBe(mockData.announcements.length);
    
    fireEvent.click(indicators[1]);
    expect(screen.getByText('Test Announcement 2')).toBeTruthy();
  });

  it('should change active slide when using carousel nav buttons', () => {
    render(<Announcements data={mockData} />);

    const nextButton = screen.getByLabelText('Next');
    const prevButton = screen.getByLabelText('Previous');

    fireEvent.click(nextButton);
    expect(screen.getByText('Test Announcement 2')).toBeTruthy();

    fireEvent.click(prevButton);
    expect(screen.getByText('Test Announcement 1')).toBeTruthy();
  });

  it('should display the correct number of slides', () => {
    const { container } = render(<Announcements data={mockData} />);
    
    const slides = container.querySelectorAll('.MuiBox-root');
    // console.log(slides);
    expect(slides.length).toBe(mockData.announcements.length);
  });
});
