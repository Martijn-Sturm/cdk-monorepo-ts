import type { Config } from 'jest';

const config: Config = {
  rootDir: './../..',
  displayName: 'infra',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/infra/**/*.test.ts'],
};

export default config;