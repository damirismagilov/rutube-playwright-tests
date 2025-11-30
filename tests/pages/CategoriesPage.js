import { BasePage } from "./BasePage";

export class CategoriesPage extends BasePage {

    constructor(page) {
        super(page);
        this.contentPageLocator = this.page.locator('.application-module_content');
    }
    async open() {
        await this.page.goto('/categories/');
    }
    async contentPageHasCorrectLayout() {
        await this.checkLayoutByScreenshot(this.contentPageLocator, 'categoriesPage.png');
    }
    async hideHeader() {
        await this.hideElement('header');
    }
}