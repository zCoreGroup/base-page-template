// jest.setup.js
import '@testing-library/jest-dom';
import dotenv from 'dotenv';
// Load environment variables from .env.test file
dotenv.config({ path: './.env.test' });
