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
    this.forgotPasswordLink = page.getByText('ลืมรหัสผ่าน?');
    this.profileImage = page.locator('.ProfileMenu [data-scope="avatar"][data-part="image"]');
  }

  async goto() {
    await this.navigate('login');
    // หน้า login มีการ navigate ซ้ำหลังโหลด ต้องรอให้นิ่งก่อน ไม่งั้นค่าที่ fill จะถูกล้าง
    await this.waitForPageLoad();
  }

  async login(username, password) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Locator for an error message shown on the page (inline field error or toast)
   * @param {string} text
   */
  errorMessage(text) {
    return this.page.getByText(text).first();
  }

  async isSupporterLoggedIn() {
    return this.profileImage.isVisible();
  }

  async isCreatorLoggedIn() {
    return this.page.url().includes('/app/creator');
  }
}
