import type { Config } from 'jest';

const config: Config = {
  rootDir: './../..',
  displayName: 'demoLambda',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/lambdas/demo/test/**/*.test.ts'],
};

export default config;