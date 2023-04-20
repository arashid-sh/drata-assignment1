import { Page } from '@playwright/test';

// playwright-dev-page.ts
export class PlatformsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //locators
  heroSubPageTitleLocator = () =>
    this.page.locator('h1', {
      hasText: 'The Highest Rated Cloud Compliance Platform',
    });
}
