import { expect, test } from '../fixtures/fixtures';
import { consoleErrors } from '../helper/ConsoleErrorsOnLoad';

test.describe('Create a UI Testing Suite', () => {
  //Note: since all the tests have similar steps but with different locators and text, I could have written one test and parameterized the dynamic text (url, title, herosubtitle)
  //https://playwright.dev/docs/test-parameterize
  test('User should navigate to the https://www.drata.com/platform page, check no console errors on page, verify title and that sub hero title exists', async ({
    page,
    platformPage,
  }) => {
    await page.goto('/platform');
    await expect(page).toHaveTitle(
      'Inside the Drata Platform Experience | Drata',
    );
    await expect(platformPage.heroSubPageTitleLocator()).toBeVisible();
    expect(await consoleErrors.getErrorCount(page)).toEqual(0);
  });

  test('User should navigate to the https://www.drata.com/product page, check no console errors on page, verify title and that sub hero title exists', async ({
    page,
    productPage,
  }) => {
    await page.goto('/product');
    await expect(page).toHaveTitle(
      'Supported Compliance and Privacy Frameworks | Drata',
    );
    await expect(productPage.heroSubPageTitleLocator()).toBeVisible();
    expect(await consoleErrors.getErrorCount(page)).toEqual(0);
  });

  test('User should navigate to the https://www.drata.com/resources page, check no console errors on page, verify title and that sub hero title exists', async ({
    page,
    resourcesPage,
  }) => {
    await page.goto('/resources');
    await expect(page).toHaveTitle('Security & Compliance Resources | Drata');
    await expect(resourcesPage.heroSubPageTitleLocator()).toBeVisible();
    expect(await consoleErrors.getErrorCount(page)).toEqual(0);
  });

  test('User should navigate to the https://www.drata.com/auditors page, check no console errors on page, verify title and that sub hero title exists', async ({
    page,
    auditorsPage,
  }) => {
    await page.goto('/auditors');
    await expect(page).toHaveTitle('Auditors | Drata');
    await expect(auditorsPage.heroSubPageTitleLocator()).toBeVisible();
    expect(await consoleErrors.getErrorCount(page)).toEqual(0);
  });

  test('User should navigate to the https://www.drata.com/customers page, check no console errors on page, verify title and that sub hero title exists', async ({
    page,
    customersPage,
  }) => {
    await page.goto('/customers');
    await expect(page).toHaveTitle('Hear From Our Customers | Drata');
    await expect(customersPage.heroSubPageTitleLocator()).toBeVisible();
    expect(await consoleErrors.getErrorCount(page)).toEqual(0);
  });

  test('User should navigate to the https://www.drata.com/about page, check no console errors on page, verify title and that sub hero title exists', async ({
    page,
    aboutPage,
  }) => {
    await page.goto('/about');
    await expect(page).toHaveTitle(
      'On a Mission to Make Compliance Effortless and Accessible | Drata',
    );
    await expect(aboutPage.heroSubPageTitleLocator()).toBeVisible();
    expect(await consoleErrors.getErrorCount(page)).toEqual(0);
  });
});
