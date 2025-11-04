module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*[.-](spec|test)\\.ts$',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,ts,mjs}',

    // Exclusions
    '!**/node_modules/**',
    '!**/*.config.js',
    '!**/*.config.mjs',
    '!jest.setup.ts',
    '!jest.setup.js',
    '!**/coverage/**',
    '!**/dist/**', // Exclude build output
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
