module.exports = {
    '@tags': ['assertStyle'],
    'Simple Login Test - Assert Style': function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .verify.title('Log in - EMS')
            .waitForElementVisible('#Input_Email', 2000)
            .setValue('#Input_Email', 'admin@admin')
            .setValue('#Input_Password', '@Password1')
            .click('button[type=submit]')
            .pause(3000)
            .assert.title('Home Page - EMS')
    },
    'Try login with Blank Credentials': function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .verify.title('Log in - EMS')
            .waitForElementVisible('button[type=submit]', 2000)
            .click('button[type=submit]')
            .assert.containsText('#Input_Email-error', 'The Email field is required')
            .assert.containsText('#Input_Password-error', 'The Password field is required.')

    },
   


}