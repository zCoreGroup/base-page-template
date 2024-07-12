// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testTimeout: 30000, //30 seconds
};

module.exports = createJestConfig(customJestConfig);
