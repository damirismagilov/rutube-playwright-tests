import { test, expect } from '../../fixtures/fixtures';

test('Проверка лейаута', async({page}) => {
    await categoriesPage.contentPageHasCorrectLayout();
});