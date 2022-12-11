import type { Config } from 'jest';

const config: Config = {
  rootDir: './../../..',
  displayName: 'utilities',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/lambdas/shared/utilities/test/**/*.test.ts'],
  transformIgnorePatterns: ['node_modules/(?!(demo-lib))'],
};

export default config;