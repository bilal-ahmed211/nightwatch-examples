module.exports = {
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
    "Home Page - Create New User": function (browser) {
        browser
        .pause(2000)
        .waitForElementVisible('#PageContent > div > p > a', 2000)
        .click('#PageContent > div > p > a')
        .waitForElementPresent('#PageContent > h2', 2000)
        .verify.containsText('#PageContent > h2', 'Register')
        .setValue('#Input_Email', 'u5.ems@yopmail.com')
        .setValue('#Input_Password', '@Datum123')
        .setValue('#Input_ConfirmPassword', '@Datum123')
        .click('#RegisterForm > button')
        .pause(3000)
        .assert.containsText('#PageContent > span', 'Saved successfully')

    }
}