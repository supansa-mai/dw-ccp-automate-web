import { BasePage } from './base.page.js';

/**
 * LoginPage — Page Object for the Login page
 * Example POM — update selectors to match your actual app
 */
export class LoginPage extends BasePage {

  constructor(page) {
    super(page);
    // Locators
    this.emailInput = page.getByLabel('อีเมล*').first();
    this.passwordInput = page.getByLabel('รหัสผ่าน');
    this.loginButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'ลืมรหัสผ่าน?' });
    this.profileImage = page.locator('[data-scope="avatar"][data-part="image"]');
  }

  async goto() {
    await this.navigate('/login');
  }

  async login(username, password) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }

  async isSupporterLoggedIn() {
    return this.profileImage.isVisible();
  }

  async isCreatorLoggedIn() {
    return this.page.url().includes('/app/creator');
  }
}
