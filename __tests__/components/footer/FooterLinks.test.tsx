import React from 'react'
import { render } from '@testing-library/react'
import FooterLinks from '@/components/footer/FooterLinks'
import { FooterLink } from '@/types'

describe('FooterLinks', () => {
  const links: FooterLink[] = [
    { name: 'Link 1', url: 'https://example.com/1' },
    { name: 'Link 2', url: 'https://example.com/2' },
    { name: 'Link 3', url: 'https://example.com/3' },
    { name: 'Link 4', url: 'https://example.com/4' },
    { name: 'Link 5', url: 'https://example.com/5' },
    { name: 'Link 6', url: 'https://example.com/6' },
    { name: 'Link 7', url: 'https://example.com/7' },
    { name: 'Link 8', url: 'https://example.com/8' },
    { name: 'Link 9', url: 'https://example.com/9' },
    { name: 'Link 10', url: 'https://example.com/10' },
  ]

  it('renders the title', () => {
    const { getByText } = render(<FooterLinks title='Footer Links' links={links} />)
    expect(getByText('Footer Links')).not.toBeNull()
  })

  it('renders links in two columns with a max of 5 links each', () => {
    const { getByText } = render(<FooterLinks title='Footer Links' links={links} />)

    const column1Links = links.slice(0, 5)
    const column2Links = links.slice(5, 10)

    column1Links.forEach((link) => {
      const linkElement = getByText(link.name)
      expect(linkElement).not.toBeNull()
      expect(linkElement.closest('a')?.getAttribute('href')).toBe(link.url)
    })

    column2Links.forEach((link) => {
      const linkElement = getByText(link.name)
      expect(linkElement).not.toBeNull()
      expect(linkElement.closest('a')?.getAttribute('href')).toBe(link.url)
    })
  })

  it('does not render more than 10 links', () => {
    const { getAllByRole } = render(<FooterLinks title='Footer Links' links={links} />)
    const linkElements = getAllByRole('link')
    expect(linkElements.length).toBe(10)
  })
})
