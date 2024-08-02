export class WelcomePageNotFound extends Error {
  constructor(message: string = 'Welcome Page Not found') {
    super(message)
    this.name = 'WelcomePageNotFound'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, WelcomePageNotFound)
    }
  }
}

export class DuplicateWelcomePage extends Error {
  constructor(message: string = 'Multiple welcome pages with the same slug') {
    super(message)
    this.name = 'DuplicateWelcomePage'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DuplicateWelcomePage)
    }
  }
}

export class LandingPageNotFound extends Error {
  constructor(message: string = 'Landing Page Not found') {
    super(message)
    this.name = 'LandingPageNotFound'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LandingPageNotFound)
    }
  }
}

export class DuplicateLandingPage extends Error {
  constructor(message: string = 'Multiple landing pages with the same slug') {
    super(message)
    this.name = 'DuplicateLandingPage'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DuplicateLandingPage)
    }
  }
}
