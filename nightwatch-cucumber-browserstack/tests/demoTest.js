module.exports = {
    "@tags": ['demo-login-test'],

    'submit login form without entering credentials': ''+ function (browser) {
        browser
            .url('http://10.10.10.2:8081')
                .waitForElementVisible('body', 3000)
                .click('button[type=submit]')
                .waitForElementVisible('#Input_Email-error', 2000)
                .verify.containsText('#Input_Email-error', 'The Email field is required.')
                .verify.containsText('#Input_Password-error', 'The Password field is required.')
    },
    'Try login with wrong email address': ''+ function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .setValue('#Input_Email', 'abc@test.com')
            .setValue('#Input_Password', '@Datum123')
            .click('button[type=submit]')
            .verify.containsText('#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li', 'Invalid login attempt.')
    },
    'Try login with valid credentials': function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .verify.title('Log in - EMS')
            .waitForElementVisible('#Input_Email', 2000)
            .clearValue('#Input_Email')
            .setValue('#Input_Email', 'bhtest18@gmail.com')
            .setValue('#Input_Password', '@Datum123')
            .click('button[type=submit]')
            .pause(3000)
            .assert.title('Home Page - EMS')
            .end();
    }
};