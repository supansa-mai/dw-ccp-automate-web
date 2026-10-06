// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environments.js';

/**
 * @see https://playwright.dev/docs/test-configuration
 *
 * Run tests with a specific environment:
 *   ENV=staging npx playwright test
 *   ENV=production npx playwright test
 *   ENV=local npx playwright test
 */
export default defineConfig({
  testDir: './tests',

  /* Match only spec files inside tests/e2e and tests/api */
  testMatch: ['**/*.spec.js'],

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter: html for local, list for CI */
  reporter: process.env.CI
    ? [['list'], ['html', { open: 'never' }]]
    : [['html', { open: 'on-failure' }]],

  /* Shared settings for all projects */
  use: {
    baseURL: env.baseURL,

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Screenshot only on failure */
    screenshot: 'only-on-failure',

    /* Video on retry */
    video: 'on-first-retry',

    /* Global timeout per action */
    actionTimeout: 10000,

    /* Navigation timeout */
    navigationTimeout: env.timeout,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Output directories */
  outputDir: 'test-results/',
});
