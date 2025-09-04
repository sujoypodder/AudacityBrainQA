// pages/ecommercePage.js
const { expect } = require('@playwright/test');
const testData = require('../utils/testData'); // ✅ merged file

class EcommercePage {
  constructor(page) {
    this.page = page;

    // Navigation locators
    this.ecomLink = page.locator('#ecommerce-site');      
    this.ecomSite = page.locator('a[href="/ecommerce/login"]'); 

    // Login locators
    this.loginEmail = page.locator('#email');
    this.loginPassword = page.locator('#password');
    this.loginButton = page.locator('button:has-text("Login")');

    // Product & Cart locators
    this.addToCartButton = page.locator('button:has-text("Add to cart")');
    this.cartIcon = page.locator("svg path[d*='M528.12 301.319']"); // ✅ simpler & reliable
    this.checkoutButton = page.locator("span:has-text('Checkout')");

    // Checkout form locators
    this.checkfname = page.locator("input[placeholder='Ex. John']");
    this.checklname = page.locator("input[placeholder='Ex. Doe']");
    this.checkzcode = page.locator("input.form-control[type='text'][value='1207']");
    this.conButton = page.locator("span:has-text('Continue')");
    this.finButton = page.locator("span:has-text('Finish')");

    // Messages
    this.successMessage = page.locator("h3:has-text('Thank you for your order!')");
    this.errorMessage = page.locator("h1:has-text('Your cart is empty.')");
  }

  // Navigate directly using baseURL from config.js
  async goto() {
    await this.page.goto('/ecommerce/login'); // ✅ baseURL adds /ecommerce automatically
  }

  async navigateToEcom() {
    await this.ecomLink.click();
    await this.ecomSite.click();
  }

  async login() {
    await this.loginEmail.fill(testData.ecommerceUser.email);
    await this.loginPassword.fill(testData.ecommerceUser.password);
    await this.loginButton.click();
  }

  async addProductToCart() {
    await this.addToCartButton.first().click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async confirm() {
    await this.checkfname.fill(testData.ecommerceUser.fname);
    await this.checklname.fill(testData.ecommerceUser.lname);
    await this.checkzcode.fill('');         
    await this.checkzcode.fill(testData.ecommerceUser.zcode);
    await this.conButton.click();
  }

  async finish() {
    await this.finButton.click();
  }

  async assertSuccess() {
    await expect(this.successMessage).toBeVisible();
  }

  async assertError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { EcommercePage };

