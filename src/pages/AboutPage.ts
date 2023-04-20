import { Page } from '@playwright/test';

// playwright-dev-page.ts
export class AboutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //locators
  heroSubPageTitleLocator = () =>
    this.page.locator('h1', {
      hasText: 'On a Mission to Make Compliance Effortless and Accessible',
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
