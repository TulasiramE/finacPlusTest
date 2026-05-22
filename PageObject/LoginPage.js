import { expect } from "@playwright/test";
class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login');
    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.validatelogoutButton = page.locator('//button[text()="Logout"]');
    this.clickonlogoutButton=page.locator('#submit');
    this.loggedUserName = page.locator('#userName-value');
    this.clickonlogoutButton=page.locator('#submit')
  }

  async goto() {
    await this.page.goto('/');
    await this.page.locator('//h5[text()="Book Store Application"]').click();
  }

  async login(Username, Password) {
    await this.loginButton.click();
    await this.usernameInput.fill(Username);
    await this.passwordInput.fill(Password);
    await this.loginButton.click();
  }

  async validateLogin(Username) {
    await expect(this.loggedUserName).toHaveText(Username);
    await expect(this.validatelogoutButton).toHaveText('Logout');
  }

  async logout() {
    await this.clickonlogoutButton.click();
  }
}

export default LoginPage;
