const { test, expect } = require('@playwright/test');
const { DragDropPage } = require('../pages/dragDropPage');

test.describe('Drag and Drop', () => {
  test('Drag "Drag Me" to "Drop Here"', async ({ page }) => {
    const dragPage = new DragDropPage(page);
    await page.goto('https://practice.qabrains.com/drag-drop');

    await dragPage.dragItemToTarget();

    await expect(page.locator("h3:text('Dropped!')")).toHaveText('Dropped!');
  });
});