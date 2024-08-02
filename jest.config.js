// jest.config.js

const nextJest = require('next/jest')

// Create Jest configuration for Next.js
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  roots: ['<rootDir>', '<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: [
    '/node_modules/',
    '.next/',
    'migrations/',
    '/scripts/',
    'public/',
    'src/design-tokens/',
    '.storybook/',
    'src/stories/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  watchPathIgnorePatterns: ['globalconfig'],
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'jest-results.xml',
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', 'startup/*.js'],
  coverageDirectory: 'coverage',
  testTimeout: 30000, // 30 seconds

  // Add the moduleNameMapper to handle CSS imports
  moduleNameMapper: {
    // Handle CSS imports with a proxy to prevent syntax errors
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    // Map fontsource imports to a stub module
    '^@fontsource/(.*)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    // Use babel-jest to transpile JavaScript/TypeScript files
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@fontsource/)', // Ensure that fontsource is transformed
  ],
}

// Export the Jest configuration
module.exports = createJestConfig(customJestConfig)
