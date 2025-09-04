class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.countrySelect = page.locator('#country');
        this.accountTypeSelect = page.locator('#account');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.conpasswordInput = page.locator('#confirm_password');
        this.submitBtn = page.locator('button:has-text("Signup")');
    }


    async register(name, country, accountType, email, password, conpassword) {
        await this.nameInput.fill(name);
        await this.countrySelect.selectOption({ label: country });
        await this.accountTypeSelect.selectOption({ label: accountType });
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.conpasswordInput.fill(conpassword);
        await this.submitBtn.click();
    }
}

module.exports = { RegistrationPage };