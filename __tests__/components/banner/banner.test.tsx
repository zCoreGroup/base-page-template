import React from 'react'
import { render } from '@testing-library/react'
import Banner from '@/components/banner/banner'
import { BannerData } from '@/types'

describe('Banner', () => {
  const baseData: BannerData = {
    logoSrc: '/path/to/logo.png',
    logoAlt: 'Vandenberg Space Base Logo',
    title: 'Vandenberg Space Base',
    tagline: 'Capacity - Agility - Responsiveness - Resilience',
    missionText: '',
    visionText: '',
  }

  const renderBanner = (data: BannerData) => render(<Banner data={data} />)

  it('renders the logo with the correct src and alt text', () => {
    const { getByAltText } = renderBanner(baseData)
    const logo = getByAltText(baseData.logoAlt)
    expect(logo).toHaveAttribute('src', baseData.logoSrc)
  })

  it('renders the title and subtitle correctly', () => {
    const { getByText } = renderBanner(baseData)
    expect(getByText(baseData.title)).toBeInTheDocument()
    expect(getByText(baseData.tagline)).toBeInTheDocument()
  })

  it('renders mission and vision when both are defined', () => {
    const data: BannerData = {
      ...baseData,
      missionText: 'Mission Text',
      visionText: 'Vision Text',
    }
    const { getByText } = renderBanner(data)
    expect(getByText('Our Mission')).toBeInTheDocument()
    expect(getByText(data.missionText)).toBeInTheDocument()
    expect(getByText('Our Vision')).toBeInTheDocument()
    expect(getByText(data.visionText)).toBeInTheDocument()
  })

  it('renders only mission when vision is undefined', () => {
    const data: BannerData = { ...baseData, missionText: 'Mission Text' }
    const { getByText, queryByText } = renderBanner(data)
    expect(getByText('Our Mission')).toBeInTheDocument()
    expect(getByText(data.missionText)).toBeInTheDocument()
    expect(queryByText('Our Vision')).toBeNull()
  })

  it('renders only vision when mission is undefined', () => {
    const data: BannerData = { ...baseData, visionText: 'Vision Text' }
    const { getByText, queryByText } = renderBanner(data)
    expect(getByText('Our Vision')).toBeInTheDocument()
    expect(getByText(data.visionText)).toBeInTheDocument()
    expect(queryByText('Our Mission')).toBeNull()
  })

  it('renders neither mission nor vision when both are undefined', () => {
    const { queryByText } = renderBanner(baseData)
    expect(queryByText('Our Mission')).toBeNull()
    expect(queryByText('Our Vision')).toBeNull()
  })
})
