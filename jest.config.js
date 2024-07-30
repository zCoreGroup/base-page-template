// jest.config.js
const customJestConfig = {
  roots: ['<rootDir>', '<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: [
    '/node_modules/',
    '.next/',
    'migrations/',
    '/scripts/',
    'public/',
    'src/designtokens/',
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
  testTimeout: 30000, //30 seconds
}

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig(customJestConfig)
