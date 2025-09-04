const { test, expect } = require('@playwright/test');
const { EcommercePage } = require('../pages/ecommercePage');
const testData = require('../utils/testData');

test('E-commerce login', async ({ page }) => {
  const ecommerce = new EcommercePage(page);
  await ecommerce.goto();
  await ecommerce.login();
});

test('Add items to cart and verify', async ({ page }) => {
  const ecommerce = new EcommercePage(page);
  await ecommerce.goto();
  await ecommerce.login();
  await ecommerce.addProductToCart(); // pass product name
  await ecommerce.goToCart();
  await expect(page).toHaveURL('https://practice.qabrains.com/ecommerce/cart');
});

test('Checkout flow with valid data', async ({ page }) => {
  const ecommerce = new EcommercePage(page);
  await ecommerce.goto();
  await ecommerce.login();
  await ecommerce.addProductToCart();
  await ecommerce.goToCart();
  await ecommerce.checkout();
  await ecommerce.confirm();
  await ecommerce.finish();
  await ecommerce.assertSuccess();
});

test('Checkout with empty cart (edge case)', async ({ page }) => {
  const ecommerce = new EcommercePage(page);
  await ecommerce.goto();
  await ecommerce.login();
  await ecommerce.goToCart();
  await ecommerce.assertError();
});


