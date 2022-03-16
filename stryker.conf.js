/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */

module.exports = {
  mutator: 'typescript',
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'off',
  tsconfigFile: 'tsconfig.json',
  mutate: ['src/**/*.ts', 'src/**/*.tsx'],
  ignorePatterns: [
    'cypress',
    'dist',
    'coverage',
    '.loki',
    '.storybook',
    '.github',
  ],
};
