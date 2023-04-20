import { Page } from '@playwright/test';

// playwright-dev-page.ts
export class AuditorsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //locators
  heroSubPageTitleLocator = () =>
    this.page.locator('h1', {
      hasText: 'Streamline and Accelerate Your Audits',
    });

  //functions/actions
  async numberOfConsoleErrorsOnPageLoad(page: Page): Promise<number> {
    const consoleErrors: any[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    return consoleErrors.length;
  }
}
