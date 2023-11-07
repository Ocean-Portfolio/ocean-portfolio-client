/**
 * @jest-environment jsdom
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '\\.(tsx|ts)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
