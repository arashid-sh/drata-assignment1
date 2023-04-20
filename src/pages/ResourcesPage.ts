import { Page } from '@playwright/test';

// playwright-dev-page.ts
export class ResourcesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //locators
  heroSubPageTitleLocator = () =>
    this.page.locator('h1', {
      hasText: 'Drata Resources',
    });
}
