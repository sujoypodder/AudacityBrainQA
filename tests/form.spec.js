const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/formPage');
const data = require('../utils/testData');

test.describe('Form Submission', () => {

  test('Submit form successfully', async ({ page }) => {
    const form = new FormPage(page);
    await page.goto('/form-submission');

    await form.fillForm(data.formUser);
    await form.submitForm();

    await expect(page.locator("//h2[normalize-space()='successfully submitted']")).toBeVisible();
  });

  test('Form validation with empty fields', async ({ page }) => {
    const form = new FormPage(page);
    await page.goto('/form-submission');

    await form.submitForm();

    await expect(page.locator("//p[normalize-space()='Name is a required field']")).toBeVisible();
    await expect(page.locator("//p[normalize-space()='Email is a required field']")).toBeVisible();
    await expect(page.locator("//p[normalize-space()='Contact is a required field']")).toBeVisible();
    //await expect(page.locator("//p[normalize-space()='Date is a required field']")).toBeVisible();
    await expect(page.locator("//p[normalize-space()='Upload File is a required field']")).toBeVisible();
    await expect(page.locator("//p[normalize-space()='Color is a required field']")).toBeVisible();
    await expect(page.locator("//p[normalize-space()='Food is a required field']")).toBeVisible();
    await expect(page.locator("//p[normalize-space()='Country is a required field']")).toBeVisible();
  });

});
