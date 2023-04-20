import { Page } from '@playwright/test';

// This contains helpers or common functions that can be used in multiple tests
export const consoleErrors = {

  /**
   * This function adds page console errors to an array and returns the count of the array
   * @param page the page context
   * @returns the length of the error array
   */
  async getErrorCount(page: Page): Promise<number> {
    const consoleErrors: any[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    return consoleErrors.length;
  },
};
