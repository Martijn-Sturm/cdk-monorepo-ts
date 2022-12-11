import type { Config } from 'jest';

const config: Config = {
  rootDir: './../..',
  displayName: 'integration',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/integration/**/*.test.ts'],
};

export default config;