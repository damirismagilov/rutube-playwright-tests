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
        this.userLogoLocator = this.page.getByAltText('Иконка канала channel56877604');
        this.headerUserMenuLocator = this.page.getByText('channel56877604ru****@yandex.ruПрофильМой каналСтудия RUTUВЕВыйти',)
    }

    //actions

    async open() {
        await this.page.goto('https://rutube.ru/'); 
    }
    async openHeaderUserMenu() {
        await this.userLogoLocator.click();
    }
    async changeThemeToWhite() {
        await this.changeThemeButtonLocator.click();
    }
    async openFullMenu() {
        await this.menuButtonLocator.click();
    }
    async openAddPopupList() {
         await this.headerAddButtonLocator.click()
    }
    async openNotificationsPopup() {
        await this.headerNotificationsButtonLocator.click()
    }
    async openAuthorizationModal() {
        await this.headerLoginButtonLocator.click()
    }
    async switchToRegistrationModal() {
        await this.switchToRegistrationModalButtonLocator.click()
    }

    //assertions

    async headerHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
    }
    async categoriesTabsHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabsSnapshot.yml');
    }
    async menuHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.menuLocator, 'menuSnapshot.yml');
    }
    async addPopupListHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonPopupList.yml');
    }
    async notificationsPopupHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
    }
    async authorizationModalHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModal.yml');
    }
    async registrationModalHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.authorizationModalLocator, 'registrationModal.yml');
    }
    async fullMenuHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
    }
    async headerUserMenuHasCorrectAriaSnapshot() {
        await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
    }
    /**
   * @param {'dark2021' | 'white2022'} attributeValue
   */
    async checkThemeAttributeValue(attributeValue) {
        await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
    }
}