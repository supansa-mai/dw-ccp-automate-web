import { BasePage } from './BasePage.js';

/**
 * LoginPage — Page Object for the Login page
 * Example POM — update selectors to match your actual app
 */
export class LoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    // Locators
    this.usernameInput = page.locator('[data-testid="username"]');
    this.passwordInput = page.locator('[data-testid="password"]');
    this.loginButton   = page.locator('[data-testid="login-btn"]');
    this.errorMessage  = page.locator('[data-testid="error-message"]');
  }

  async goto() {
    await this.navigate('/login');
  }

  /**
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }

  async isLoggedIn() {
    // Update this to match your post-login URL or element
    return this.page.url().includes('/dashboard');
  }
}
