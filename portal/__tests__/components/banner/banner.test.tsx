import React from 'react';
import { render } from '@testing-library/react';
import Banner from '@/components/banner/banner';
import { BannerData } from "@/types";

describe('Banner', () => {
  const data: BannerData = {
    logoSrc: '/path/to/logo.png',
    logoAlt: 'Vandenberg Space Base Logo',
    title: 'Vandenberg Space Base',
    tagline: 'Capacity - Agility - Responsiveness - Resilience',
    missionText: 'Provide agile responsive and resilient spaceport, test range, and installation capabilities for the nation',
    visionText: 'Unconstrained space launch and test event capacity from the Department of the Air Force’s base of choice'
  };

  it('renders the logo with the correct src and alt text', () => {
    const { getByAltText } = render(<Banner data={data} />);
    const logo = getByAltText(data.logoAlt);
    expect(logo).toHaveAttribute('src', data.logoSrc);
  });

  it('renders the title and subtitle correctly', () => {
    const { getByText } = render(<Banner data={data} />);
    expect(getByText(data.title)).toBeInTheDocument();
    expect(getByText(data.tagline)).toBeInTheDocument();
  });

  it('renders the mission and vision correctly', () => {
    const { getByText } = render(<Banner data={data} />);
    expect(getByText('Our Mission')).toBeInTheDocument();
    expect(getByText(data.missionText)).toBeInTheDocument();
    expect(getByText('Our Vision')).toBeInTheDocument();
    expect(getByText(data.visionText)).toBeInTheDocument();
  });
});