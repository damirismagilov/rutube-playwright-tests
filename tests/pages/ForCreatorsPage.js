import { BasePage } from "./BasePage";

export class ForCreatorsPage extends BasePage {
    static testsParams = [
  {
    url: '/for_creators/#main',
    screenshotName: 'mainTab.png',
    name: 'Главная'
  },
  {
    url: '/for_creators/#steps',
    screenshotName: 'stepsTab.png',
    name: 'Первые шаги'
  },
  {
    url: '/for_creators/#faq',
    screenshotName: 'faqTab.png',
    name: 'Как развивать канал'
  },
  {
    url: '/for_creators/#monetization',
    screenshotName: 'monetizationTab.png',
    name: 'Монетизация'
  },
  {
    url: '/for_creators/#rules',
    screenshotName: 'rulesTab.png',
    name: 'Правила'
  },
  {
    url: '/for_creators/#team',
    screenshotName: 'teamTab.png',
    name: 'Команда R'
  }
];

    constructor(page) {
        super(page);
        this.pageContentLocator = this.page.locator('#___gatsby');
    }
    /**
    * @param {string} url
    */ 
    async open(url) {
        await this.page.goto(url);
    }
    /**
    * @param {string} screenshotName
    */ 
    async pageHasCorrectLayout(screenshotName) {
        await this.checkLayoutByScreenshot(this.pageContentLocator, screenshotName);
    }
}