// __tests__/events.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Events from '@/components/events/events';
import { EventsData } from '@/types';

const mockData: EventsData = {
  events: [
    {
      id: '1',
      status: 'active',
      userCreated: 'user1',
      dateCreated: '2023-01-01',
      userUpdated: 'user2',
      dateUpdated: '2023-01-02',
      title: 'Event 1',
      description: '<p>Description 1</p>',
      image: '/path/to/image1.jpg',
      schedule: {
        label: 'Schedule 1',
        startTime: '2023-01-03T10:00:00',
      },
      startDate: '2023-01-03',
      endDate: '2023-01-04',
      slug: 'event-1',
      labels: [1, 2],
    },
    {
      id: '2',
      status: 'active',
      userCreated: 'user3',
      dateCreated: '2023-02-01',
      userUpdated: 'user4',
      dateUpdated: '2023-02-02',
      title: 'Event 2',
      description: '<p>Description 2</p>',
      image: '/path/to/image2.jpg',
      schedule: {
        label: 'Schedule 2',
        startTime: '2023-02-03T10:00:00',
      },
      startDate: '2023-02-03',
      endDate: '2023-02-04',
      slug: 'event-2',
      labels: [3, 4],
    },
    // Add more mock events as needed
  ],
};

describe('Events Component', () => {
  test('renders the component with event data', () => {
    render(<Events data={mockData} />);

    // Check if the title is rendered
    expect(screen.getByText('Base Events')).toBeInTheDocument();

    // Check if the events are rendered
    mockData.events.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getByAltText(event.title)).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
      expect(screen.getByText('Description 2')).toBeInTheDocument();
    });
  });

  test('strips HTML tags from event descriptions', () => {
    render(<Events data={mockData} />);

    // Check if the HTML tags are stripped
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('handles page change', () => {
    render(<Events data={mockData} />);

    // Simulate page change
    fireEvent.click(screen.getByRole('button', { name: '2' }));

    // Check if the second page of events is rendered
    mockData.events.slice(4, 8).forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    });
  });
});
