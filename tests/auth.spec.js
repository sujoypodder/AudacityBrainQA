const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { RegistrationPage } = require('../pages/registrationPage');
const { ForgotPasswordPage } = require('../pages/forgotPasswordPage');
const data = require('../utils/testData');

test.describe('User Authentication', () => {
  test('Successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.navigateToLogin();
    await login.login(data.validUser.email, data.validUser.password);
    await expect(page.locator("//span[@class='title text-black text-md']")).toBeVisible();
  });

  test('Negative login with wrong credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.navigateToLogin();
    await login.login(data.invalidUser.email, data.invalidUser.password);
    await expect(login.errorMsg).toBeVisible();
  });

  test('Navigate to registration page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.navigateToRegistration();
    const reg = new RegistrationPage(page);
    await reg.register(
      data.registrationUser.name,
      data.registrationUser.country,
      data.registrationUser.accountType,
      data.registrationUser.email,
      data.registrationUser.password,
      data.registrationUser.conpassword
    );
    await expect(page.locator("//h2[normalize-space()='Registration Successful']")).toBeVisible();
  });

  test('Navigate to forgot password page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.navigateToForgotPassword();
    const forgot = new ForgotPasswordPage(page);
    await forgot.resetPassword(data.validUser.email);
    await expect(page.locator("//h2[normalize-space()='Check Email']")).toBeVisible();
  });
});