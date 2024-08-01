import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from '@/components/breadcrumbs/breadCrumb'
import { BreadCrumb, BreadCrumbData } from '@/types'

describe('Breadcrumbs', () => {
  test('renders Breadcrumbs component with home link', () => {
    const mocklist: BreadCrumb[] = [
      { text: 'home', link: '/home' },
      { text: 'base', link: '/home/base' },
    ]
    const mockData: BreadCrumbData = {
      links: mocklist,
    }

    render(<Breadcrumbs data={mockData} />)

    // Check for the first "Home" link
    const homeLinks = screen.getAllByText(/home/i)
    expect(homeLinks[0]).toBeInTheDocument()
    expect(homeLinks[0]).toHaveAttribute('href', '/')

    // Check all links
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveTextContent(/home/i)
    expect(links[0]).toHaveAttribute('href', '/')
    expect(links[1]).toHaveTextContent(/home/i)
    expect(links[1]).toHaveAttribute('href', '//home')
    expect(links[2]).toHaveTextContent(/base/i)
    expect(links[2]).toHaveAttribute('href', '//home/base')

    // Check for separators
    const slashes = screen.getAllByText('/', { exact: true })
    expect(slashes).toHaveLength(2)
  })

  test('renders Breadcrumbs component with no additional links', () => {
    const dataWithoutLinks: BreadCrumbData = { links: [] }
    render(<Breadcrumbs data={dataWithoutLinks} />)

    const homeLink = screen.getByText(/home/i)
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)

    const slashes = screen.queryAllByText('/', { exact: true })
    expect(slashes).toHaveLength(0)
  })
})
