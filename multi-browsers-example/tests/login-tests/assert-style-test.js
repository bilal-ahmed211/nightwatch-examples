//Bad Tests - Not manageable - There are better ways of writting tests - Go for Page objects Implementation
module.exports = {
    '@tags': ['loginAssertStyle'],
    'Try Login with Blank Credentials': function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .verify.title('Log in - EMS')
            .waitForElementVisible('button[type=submit]', 2000)
            .click('button[type=submit]')
            .assert.containsText('#Input_Email-error', 'The Email field is required')
            .assert.containsText('#Input_Password-error', 'The Password field is required.')
            .end();
    },
    'Try Login with invalid Email and Valid Password': function (browser) {
        browser.pause(2000)
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .setValue("#Input_Email", 'abc.test.com')
            .setValue("#Input_Password", "@Password1")
            .click("button[type=submit]")
            .pause(2000)
            .waitForElementPresent("#Input_Email-error", 3000)
            .assert.containsText('#Input_Email-error', 'The Email field is not a valid e-mail address.')
            .end();
    },
    'Try Login with Blank Password': function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .clearValue('#Input_Email')
            .pause(1000)
            .setValue('#Input_Email', 'admin@admin')
            .clearValue('#Input_Password')
            .pause(1000)
            .click('button[type=submit]')
            .pause(2000)
            .assert.elementPresent('#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li')
            .assert.containsText('#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li', 'The Password field is required.')
            .end();
    },
    'Try Login with Invalid Password': function (browser) {
        browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body', 3000)
            .clearValue('#Input_Email')
            .pause(1000)
            .setValue('#Input_Email', 'admin@admin')
            .clearValue('#Input_Password')
            .setValue('#Input_Password', 'wrongpass')
            .pause(1000)
            .click('button[type=submit]')
            .pause(2000)
            .assert.elementPresent('#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li')
            .assert.containsText('#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li', 'Invalid login attempt.')
            .end();
    },
    'Try Login with Valid Credentials': function (browser) {
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
    },




}