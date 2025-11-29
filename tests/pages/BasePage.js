import {page} from '@playwright/test';

export class BasePage {

constructor(page) {
    this.page = page;
}
async closeCookiesAlert() {
    await this.page.getByLabel('Уведомление о использовании').locator('button').click();
}
}