import { BasePage } from "./BasePage";

export class SubscriptionsPage extends BasePage {

    constructor(page) {
        super(page);
        this.contentPageLocator = this.page.locator('. application-module_content');

    }
    async open() {
        await this.page.goto('https://rutube.ru/my/subscriptions/');
    }
    async contentHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.contentPageLocator, 'contentAriaSnapshot.yml');
    }
}