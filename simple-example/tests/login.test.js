module.exports = {
    "Simple Login Test": function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .verify.title('Log in - EMS')
            .waitForElementVisible('button[type=submit]', 2000)
            .click('button[type=submit]')
            .assert.containsText('#Input_Email-error', 'The Email field is required')
            .assert.containsText('#Input_Password-error', 'The Password field is required.')
            .end();
    }
}