import { test as base } from '@playwright/test';

import { AboutPage } from '../pages/AboutPage';
import { AuditorsPage } from '../pages/AuditorsPage';
import { CustomersPage } from '../pages/CustomersPage';
import { PlatformsPage } from '../pages/PlatformPage';
import { ProductPage } from '../pages/ProductPage';
import { ResourcesPage } from '../pages/ResourcesPage';

//http://playwright.dev/docs/test-fixtures#with-fixtures
type MyFixtures = {
  platformPage: PlatformsPage;
  productPage: ProductPage;
  resourcesPage: ResourcesPage;
  auditorsPage: AuditorsPage;
  customersPage: CustomersPage;
  aboutPage: AboutPage;
};

export const test = base.extend<MyFixtures>({
  platformPage: async ({ page }, use) => {
    await use(new PlatformsPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  resourcesPage: async ({ page }, use) => {
    await use(new ResourcesPage(page));
  },

  auditorsPage: async ({ page }, use) => {
    await use(new AuditorsPage(page));
  },

  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },

  customersPage: async ({ page }, use) => {
    await use(new CustomersPage(page));
  },
});

export { expect } from '@playwright/test';
