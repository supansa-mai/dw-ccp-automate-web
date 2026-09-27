import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

/**
 * Custom fixtures — extend Playwright's base test with page objects
 * Usage in tests:
 *   import { test } from '../fixtures/pages.fixture.js';
 *   test('...', async ({ loginPage }) => { ... });
 */
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Add more page fixtures here as you create new Page Objects
  // dashboardPage: async ({ page }, use) => {
  //   const dashboardPage = new DashboardPage(page);
  //   await use(dashboardPage);
  // },
});

export { expect } from '@playwright/test';
