// utils/testData.js
module.exports = {
    baseURL: 'https://practice.qabrains.com',  // ✅ moved from testData1

    validUser: {
        email: 'qa_testers@qabrains.com',
        password: 'Password123'
    },
    invalidUser: {
        email: 'invalid@qabrains.com',
        password: 'wrongpass'
    },
    registrationUser: {
        name: 'Dexter Tester',
        country: 'Bangladesh',
        accountType: 'Engineer',
        email: 'dexteruser@example.com',
        password: 'NewPass123',
        conpassword: 'NewPass123'
    },
    formUser: {
        name: 'John Snow',
        email: 'john@example.com',
        contact: '09590688607',
        date: '2025-09-04',
        filePath: '../files/sample.pdf',
        color: ['Green', 'Red'],
        food: ['Pasta', 'Pizza'],
        country: 'United States'
    },
    ecommerceUser: {   // ✅ kept from testData1
        email: 'test@qabrains.com',
        password: 'Password123',
        fname: 'Daenerys',
        lname: 'Targaryen',
        zcode: '1300'
    }
};
