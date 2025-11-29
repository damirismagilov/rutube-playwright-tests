import {expect, page} from '@playwright/test';

export class BasePage {

constructor(page) {
    this.page = page;
}
async closeCookiesAlert() {
    await this.page.getByLabel('Уведомление о использовании').locator('button').click();
}
/**
 * @param {import('@playwright/test').Locator} locator
 * @param {string} ariaName
 */
async checkAriaSnapshot(locator, ariaName) {
    await expect(locator).toMatchAriaSnapshot({name: ariaName});
    }
}