import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  projects: [
    'test/infra/jest.config.ts',
    'test/integration/jest.config.ts',
    'lambdas/shared/demo-lib/jest.config.ts',
    'lambdas/shared/utilities/jest.config.ts',
    'lambdas/demo/jest.config.ts'
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
export default config;
