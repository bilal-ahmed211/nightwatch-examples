
module.exports = {
    'Simple Login Test': function (browser) {
        var login = browser.page.loginPage()
        login.navigate()
        .waitForElementVisible('body', 3000)
        .waitForElementPresent('@email', 3000)
        .verify.title('Log in - EMS')
        .setValue('@email', 'admin@admin')
        .setValue('@password')
        .click('@submit')
        .pause(3000)
        .assert.title('Home Page - EMS')
    }
}