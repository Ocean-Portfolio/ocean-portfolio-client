/**
 * @jest-environment jsdom
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  verbose: true,
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
};
