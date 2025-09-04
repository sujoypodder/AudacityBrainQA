QA Brains Automation Assignment
Overview

This repository contains an end-to-end automation project using Playwright with JavaScript. The project demonstrates testing of web applications including registration, login, forms, and e-commerce checkout flows.

All test scripts follow Playwright best practices, including:

Page Object Model (POM) for maintainable locators and actions

Configurable test settings via playwright.config.js

Explicit assertions using Playwright’s expect API

Screenshots and video capture on test failures

Features Tested

User Registration & Login

Positive and negative scenarios

Field validation and password confirmation

Forms

Input fields (text, email, password, file upload, date)

Dropdowns, checkboxes, radio buttons

Validation for required and invalid inputs

E-Commerce Flow

Navigate to e-commerce site

Add product to cart

Checkout with valid user information

Confirmation and success message validation

Drag & Drop

Demonstrated using HTML5 draggable elements

Setup Instructions

Clone the repo:
git clone <your-repo-url>
cd <your-repo-folder>
Install dependencies:
npm install
Run tests:
npx playwright test
View reports:
After tests run, HTML reports will be available in playwright-report/.
Assignment Submission

Video Recording: Playwright Test Demo
