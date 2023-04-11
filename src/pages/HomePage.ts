import { Page } from '@playwright/test';

// playwright-dev-page.ts
export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //locators
  signUpBtn = () => this.page.locator('a[href="/signup"]');

  /**
   * Function clicks the sign up button on the LTK homepage
   */
  async clickSignUpBtn() {
    await this.signUpBtn().click();
  }
}
