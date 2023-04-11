// playwright-dev-page.ts
import { Page } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //locators
  emailField = () => this.page.locator('[name=email][required=required]');
  passwordField = () => this.page.locator('[name=password][required=required]');
  continueBtn = () =>
    this.page.locator('.v-btn__content', { hasText: 'continue' });
  signUpToBeginShoppingBtn = () =>
    this.page.locator('.v-btn__content', {
      hasText: 'sign up to begin shopping',
    });

  /**
   * Function enters the provided email address and clicks on the continue button
   * @param email: the email address to be entered into the email field
   */
  async enterEmailAddress(email: string): Promise<void> {
    await this.emailField().type(email!);
    await this.continueBtn().click();
  }

  /**
   * Function enters the password and clicks on the sign up to begin shopping button.
   * @param password: the password to be entered into the password field
   */
  async enterPassword(password: string): Promise<void> {
    await this.passwordField().type(password);
    await this.signUpToBeginShoppingBtn().click();
  }
}
