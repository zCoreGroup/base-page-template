import React from 'react'
import { getByRole, render } from '@testing-library/react'
import Footer from '@/components/footer/Footer'
import { FooterData } from '@/types'

describe('Footer', () => {
  const data: FooterData = {
    streetAddress: '1234 Elm street',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
    phone: 'tel:+1(805)606-1110',
    email: 'mailto:SLD30.PA.Workflow@us.af.mil',
    informationTitle: 'Hours of Operations',
    informationText:
      'Mon-Fri: 6am-6pm\nSat: 8am-4pm\nSun: 10am-4pm\nHoliday Closures: Thanksgiving Day and Christmas Day\nAfter Hour Passes: Visitors needing a visitor pass after hours can receive a 24 hour pass at the Santa Maria gate, (located on California Blvd. at the intersection with HWY1)',
    baseMapImage: 'path/to/baseMapImage.jpg',
    linkFB: 'https://www.facebook.com/SLD30/',
    linkX: 'https://x.com/sldelta30',
    linkIG: 'https://www.instagram.com/vandenberg_sfb/',
    linkYT: 'https://www.youtube.com/user/30SWVandenberg',
    quickLinks: [],
    guardianPortal: [],
    feedback: ''
  }

  it('renders the titles, subtitles, and links correctly', () => {
    const { getByText, getByAltText } = render(<Footer data={data} />)
    expect(getByText('Locations')).toBeInTheDocument()
    expect(getByText(data.streetAddress)).toBeInTheDocument()
    expect(getByText(`${data.city} ${data.state} ${data.zip}`)).toBeInTheDocument()
    expect(getByText(data.email)).toBeInTheDocument()
    expect(getByText(data.phone)).toBeInTheDocument()
    expect(getByText(data.informationTitle)).toBeInTheDocument()

    data.informationText.split('\n').forEach((text) => {
      expect(getByText(text)).toBeInTheDocument()
    })

    expect(getByText('Base Map')).toBeInTheDocument()
    expect(getByAltText('Base Map')).toBeInTheDocument()
  })
})
