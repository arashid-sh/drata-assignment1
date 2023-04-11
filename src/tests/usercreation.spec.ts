import { UserService } from '../../src/factories/usercreationfactory';
import { expect, test } from '../fixtures/fixtures';

test.describe('Create a new user', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('User should be created and redirected to dashboard page', async ({
    page,
    homePage,
    signUpPage,
  }) => {
    //Creating a new user with random email and password. We can now pass the email address to subsequent steps for assertions.
    const user = await UserService.createUser();
    await homePage.clickSignUpBtn();
    await signUpPage.enterEmailAddress(user.email!);
    await signUpPage.enterPassword(user.password!);
    //Making playwright wait for the page to load before making assertions
    await page.waitForURL('/home/for-you');
    //Asserting that we are on the dashboard page by validating the page title
    await expect(page).toHaveTitle(
      'Discover content from our community of Creators | LTK',
    );
    //Hovering over the user icon on the top right to reveal user information
    await page.hover('.ltk-header__user-menu');

    //Asserting that the user we created is indeed listed/created and shown in the user icon drop down
    expect(await page.locator(`[name=Email]`).getAttribute('title')).toBe(
      user.email!.toLowerCase(),
    );
  });
});
