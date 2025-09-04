// playwright.config.js (or config.js)
const { defineConfig } = require('@playwright/test');
const testData = require('./utils/testData');  // ✅ import merged testData.js

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: testData.baseURL,  // ✅ now using merged testData
  },
  reporter: [['html', { outputFolder: 'playwright-report-ecommerce' }]],
});


