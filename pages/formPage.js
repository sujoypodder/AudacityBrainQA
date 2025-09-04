const path = require('path');

class FormPage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.contactInput = page.locator('#contact');
        this.dateInput = page.locator('#date');
        this.fileUpload = page.locator('#file');
        this.countrySelect = page.locator('#country');
        this.submitBtn = page.locator('button[type="submit"]:has-text("Submit")');
    }

    async fillForm({ name, email, contact, date, filePath, color, food, country }) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.contactInput.fill(contact);
        await this.dateInput.fill(date);

        if (filePath) {
            const absoluteFilePath = path.isAbsolute(filePath) ? filePath : path.join(__dirname, filePath);
            await this.fileUpload.setInputFiles(absoluteFilePath);
        }

        if (color && Array.isArray(color)) {
            for (const c of color) {
            await this.page.locator(`input[name='color'][value='${c}']`).check();
            }
        }

        if (food && Array.isArray(food)) {
            for (const f of food) {
                await this.page.locator(`input[name='food'][value='${f}']`).check();
            }
        }

        if (country) {
            await this.countrySelect.selectOption({ label: country });
        }
    }

    async submitForm() {
        await this.submitBtn.click();
    }
}

module.exports = { FormPage };
