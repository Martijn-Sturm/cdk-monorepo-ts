import type { Config } from 'jest';

const config: Config = {
  rootDir: './../../..',
  displayName: 'demo-lib',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/lambdas/shared/demo-lib/test/**/*.test.ts'],
};

export default config;