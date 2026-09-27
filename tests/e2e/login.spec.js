import { test, expect } from '../../fixtures/pages.fixture.js';
import { loadTestData } from '../../helpers/test-utils.js';

test.describe('Login', () => {
  let users;

  test.beforeAll(async () => {
    users = await loadTestData('users');
  });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should login with valid credentials', async ({ loginPage }) => {
    const { username, password } = users.valid_user;
    await loginPage.login(username, password);
    expect(await loginPage.isLoggedIn()).toBeTruthy();
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    const { username, password } = users.invalid_user;
    await loginPage.login(username, password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid');
  });
});
