import React from 'react'
import { render } from '@testing-library/react'
import DocsPage from '../../../src/app/docs/page'
import { specs } from '@/lib/swagger'

// Mock the dynamic import
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div data-testid='swagger-ui'>Mocked SwaggerUI</div>
  DynamicComponent.displayName = 'SwaggerUI'
  return DynamicComponent
})

describe('DocsPage', () => {
  it('renders SwaggerUI component with correct props', () => {
    const { getByTestId } = render(<DocsPage />)

    const swaggerUIComponent = getByTestId('swagger-ui')
    expect(swaggerUIComponent).toBeInTheDocument()
    expect(swaggerUIComponent).toHaveTextContent('Mocked SwaggerUI')

    // Check if the SwaggerUI component receives the correct spec prop
    expect(DocsPage().props.spec).toBe(specs)
  })
})
