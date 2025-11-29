import {page} from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {

    constructor(page) {
        super(page);
        this.headerLocator = this.page.getByRole('banner');
        this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: 'ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн16+18'});
        this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
        this.headerAddButtonLocator = this.page.getByRole('button', {name: 'Добавить'});
        this.headerNotificationsButtonLocator = this.page.getByRole('button', {name: 'Уведомления'});
        this.headerLoginButtonLocator = this.page.getByRole('button', {name: 'Вход и регистрация'});
        this.headerAddButtonPopupListLocator = this.page.locator('.wdp-header-right-module_uploader ul');
        this.headerNotificationsPopLocator = this.page.locator('.wdp-notifications-popup-module_wrapper');
        this.authorizationModalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role="form"]');
        this.switchToRegistrationModalButtonLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role="form"]').getByRole('button', {name: 'Зарегистрироваться'});
        this.menuButtonLocator = this.page.getByRole('button', {name: 'Открыть меню навигации'});
        this.openMenuAriaLocator = this.page.locator('.menu-content-nodule_menuOpen');
        this.changeThemeButtonLocator = this.page.getByRole('button', {name: 'Переключить на светлую тему'});
    }
    async open() {
        this.page.goto('https://rutube.ru/'); 
    }
    async changeThemeToWhite() {
        await this.changeThemeButtonLocator.click();
    }
    async openFullMenu() {
        await this.menuButtonLocator.click();
    }
    async headerHasCorrectAriaSnapshot() {
        await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaSnapshot.yml'});
    }
    async categoriesTabsHasCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesTabsSnapshot.yml'});
    }
    async menuHasCorrectAriaSnapshot() {
        await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuSnapshot.yml'});
    }
    async openAddPopupList() {
        this.headerAddButtonLocator.click()
    }
    async openNotificationsPopup() {
        this.headerNotificationsButtonLocator.click()
    }
    async openAuthorizationModal() {
        this.headerLoginButtonLocator.click()
    }
    async switchToRegistrationModal() {
        this.switchToRegistrationModalButtonLocator.click()
    }
    async addPopupListHasCorrectAriaSnapshot() {
        await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({name: 'addButtonPopupList.yml'});
    }
    async notificationsPopupHasCorrectAriaSnapshot() {
        await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({name: 'notificationsPopup.yml'});
    }
    async authorizationModalHasCorrectAriaSnapshot() {
        await expect(this.authorizationModalLocator).toMatchAriaSnapshot({name: 'authorizationModal.yml'});
    }
    async registrationModalHasCorrectAriaSnapshot() {
        await expect(this.authorizationModalLocator).toMatchAriaSnapshot({name: 'registrationModal.yml'});
    }
    async fullMenuHasCorrectAriaSnapshot() {
        await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({name: 'fullMenuSnapshot.yml'});
    }
    /**
   * @param {'dark2021' | 'white2022'} attributeValue
   */
    async checkThemeAttributeValue(attributeValue) {
        await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
    }
}