import { test, expect } from '../../../fixtures/pages.fixture.js';

test.describe('001 - Supporter Login', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('Login successfully', async ({ loginPage }) => {
    await loginPage.login('supansa.h@datawow.io', 'Test#123');
    await expect(loginPage.profileImage).toBeVisible();
  });

  test('Login Fail with invalid email', async ({ loginPage }) => {
    await loginPage.login('supansa', 'Test#123');
    await expect(loginPage.errorMessage('รูปแบบอีเมลไม่ถูกต้อง')).toBeVisible();
  });

  test('Login Fail with invalid password', async ({ loginPage }) => {
    await loginPage.login('supansa.h@datawow.io', 'Test@123');
    await expect(loginPage.errorMessage('อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง')).toBeVisible();
    await expect(loginPage.profileImage).toBeHidden();
  });
});