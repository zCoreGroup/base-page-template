import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SWRConfig } from 'swr'
import ProfilePage from '../../../src/app/profile/page'

// Mock the useSWR hook
jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
    // eslint-disable-next-line @next/next/no-img-element
  ) => <img {...props} alt={''} />,
}))

jest.mock('../../../src/components/navbar/Navbar', () => {
  return {
    __esModule: true,
    default: () => <div data-testid='mocked-navbar'>Mocked Navbar</div>,
  }
})

jest.mock('../../../src/components/footer/Footer', () => {
  return {
    __esModule: true,
    default: () => <div data-testid='mocked-footer'>Mocked Footer</div>,
  }
})

const mockProfileData = {
  navbar: {
    leftLinks: [],
    rightLinks: [],
    logo: 'test-logo.png',
    logoAlt: 'Test Logo',
    notificationsCount: 0,
    user: {
      name: 'Test User',
      avatarUrl: 'test-avatar.png',
    },
  },
  footer: {},
}

describe('ProfilePage', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks()

    // Mock the useSWR hook to return our mock data
    require('swr').default.mockReturnValue({
      data: mockProfileData,
      error: null,
      isLoading: false,
    })
  })

  test('renders profile page with correct title', async () => {
    render(<ProfilePage />)
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  test('displays user profile information', async () => {
    render(<ProfilePage />)
    expect(screen.getByLabelText('Display Name')).toHaveValue('Bailey Bootbuilder')
    // Get all elements with label 'Email'
    const emailInputs = screen.getAllByLabelText('Email')
    // Check the first 'Email' input
    expect(emailInputs[0]).toHaveValue('bailey.bootbuilder.4@spaceforce.mil')

    expect(screen.getByLabelText('Phone')).toHaveValue('555-5555')
  })

  test('allows changing base selection', async () => {
    render(<ProfilePage />)
    const baseField = screen.getByLabelText('Your Base')
    expect(baseField).toHaveValue('Vandenberg Space Force Base')

    // Click on the dropdown icon to open the menu
    const dropdownIcon = screen.getByTestId('ArrowDropDownIcon')
    fireEvent.click(dropdownIcon)

    // Wait for the menu to appear
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    // Now click on the new base option
    const newBase = 'Patrick Space Force Base'
    fireEvent.click(screen.getByText(newBase))

    // Wait for the value to change
    await waitFor(() => {
      expect(baseField).toHaveValue(newBase)
    })
  })

  test('renders location section', () => {
    render(<ProfilePage />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByLabelText('State')).toHaveValue('Washington D.C.')
    expect(screen.getByLabelText('City')).toHaveValue('Washington D.C.')
  })

  test('renders notifications section', () => {
    render(<ProfilePage />)
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Launches')).toBeInTheDocument()
    expect(screen.getByText('Space Force News')).toBeInTheDocument()
  })

  test('renders linked family members section', () => {
    render(<ProfilePage />)
    expect(screen.getByText('Linked Family Members')).toBeInTheDocument()
    expect(screen.getByText('Name 1')).toBeInTheDocument()
    expect(screen.getByText('Name 2')).toBeInTheDocument()
    expect(screen.getByText('Name 3')).toBeInTheDocument()
  })

  test('renders portal appearance section', () => {
    render(<ProfilePage />)
    expect(screen.getByText('Portal Appearance')).toBeInTheDocument()
    expect(screen.getByText('Light')).toBeInTheDocument()
    expect(screen.getByText('Dark')).toBeInTheDocument()
    expect(screen.getByText('Mars')).toBeInTheDocument()
  })

  test('displays loading skeleton when data is loading', () => {
    require('swr').default.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    })

    render(<ProfilePage />)
    expect(screen.getByTestId('profile-page-skeleton')).toBeInTheDocument()
  })

  test('throws error when there is an error fetching data', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    require('swr').default.mockReturnValue({
      data: null,
      error: new Error('Failed to fetch'),
      isLoading: false,
    })

    expect(() => render(<ProfilePage />)).toThrow('Failed to fetch')

    consoleErrorSpy.mockRestore()
  })
})
