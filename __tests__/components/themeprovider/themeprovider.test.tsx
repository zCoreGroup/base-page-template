import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeProvider from '../../../src/components/themeprovider/themeprovider'
import { Typography } from '@mui/material'

describe('ThemeProvider', () => {
  it('renders children with the correct theme', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Typography>Test Typography</Typography>
      </ThemeProvider>
    )

    const typographyElement = getByText('Test Typography')
    expect(typographyElement).toBeInTheDocument()
  })
})
