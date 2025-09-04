class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('button:has-text("Login")');
        this.errorMsg = page.locator('span.title.text-black.text-md');
        this.loginLink = page.locator("//span[normalize-space()='Login']");
        this.registrationLink = page.locator("//span[normalize-space()='Registration']");
        this.forgotPasswordLink = page.locator("//span[normalize-space()='Forgot Password']");
    }


    async goto() {
        await this.page.goto('/login');
    }


    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async navigateToLogin() {
        await this.loginLink.click();
    }

    async navigateToRegistration() {
        await this.registrationLink.click();
    }


    async navigateToForgotPassword() {
        await this.forgotPasswordLink.click();
    }
}

module.exports = { LoginPage };