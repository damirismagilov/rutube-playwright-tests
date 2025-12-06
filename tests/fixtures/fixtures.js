import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CategoriesPage } from '../pages/CategoriesPage';


// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open()
    await mainPage.closeCookiesAlert()

    // Use the fixture value in the test.
    await use(mainPage);

  },
  categoriesPage: async ({page}, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closeCookiesAlert();
    await categoriesPage.hideHeader();

    await use(categoriesPage);
  }
});
export { expect } from '@playwright/test';