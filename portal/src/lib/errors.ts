export class LandingPageNotFound extends Error {
    constructor(message: string = 'Landing Page Not found') {
        super(message);
        this.name = 'LandingPageNotFound';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LandingPageNotFound);
        }
    }
}

export class DuplicateLandingPage extends Error {
    constructor(message: string = 'Multiple landing pages with the same slug') {
        super(message);
        this.name = 'DuplicateLandingPage';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DuplicateLandingPage);
        }
    }
}