class ForgotPasswordPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator("//input[@id='email']");
        this.submitBtn = page.locator("//button[normalize-space()='Reset Password']");
    }


    async resetPassword(email) {
        await this.emailInput.fill(email);
        await this.submitBtn.click();
    }
}

module.exports = { ForgotPasswordPage };