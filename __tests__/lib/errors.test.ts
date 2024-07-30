import { LandingPageNotFound, DuplicateLandingPage } from '../../src/lib/errors'

describe('LandingPageNotFound', () => {
  it('should create an instance of LandingPageNotFound with default message', () => {
    const error = new LandingPageNotFound()
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('LandingPageNotFound')
    expect(error.message).toBe('Landing Page Not found')
    expect(error.stack).toBeDefined()
  })

  it('should create an instance of LandingPageNotFound with custom message', () => {
    const customMessage = 'Custom not found message'
    const error = new LandingPageNotFound(customMessage)
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('LandingPageNotFound')
    expect(error.message).toBe(customMessage)
    expect(error.stack).toBeDefined()
  })
})

describe('DuplicateLandingPage', () => {
  it('should create an instance of DuplicateLandingPage with default message', () => {
    const error = new DuplicateLandingPage()
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('DuplicateLandingPage')
    expect(error.message).toBe('Multiple landing pages with the same slug')
    expect(error.stack).toBeDefined()
  })

  it('should create an instance of DuplicateLandingPage with custom message', () => {
    const customMessage = 'Custom duplicate message'
    const error = new DuplicateLandingPage(customMessage)
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('DuplicateLandingPage')
    expect(error.message).toBe(customMessage)
    expect(error.stack).toBeDefined()
  })
})
