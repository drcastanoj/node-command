/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: ['<rootDir>/bin/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
