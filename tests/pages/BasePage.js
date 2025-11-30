import {expect} from '@playwright/test';

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
/**
 * @param {string} screenshotName
 */    
async checkLayoutByScreenshot(locator, screenshotName) {
   await expert(locator).toHaveScreenshot(screenshotName);
}
/**
 * @param {string} selector
 */
async hideElement(selector) {
    await this.page.evaluate((selector) => {
            const header = document.querySelector(selector);
            if (header) {
              header.style.display = 'none';  
            }
        }, selector);
}
}