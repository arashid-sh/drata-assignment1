import { test as base } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/SignUpPage';

//http://playwright.dev/docs/test-fixtures#with-fixtures
type MyFixtures = {
  homePage: HomePage;
  signUpPage: SignUpPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
});

export { expect } from '@playwright/test';
