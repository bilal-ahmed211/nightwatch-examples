module.exports = {
    '@tags': ['Login-pageObject'],
    "Login Simple Test - Page Object Example": function (browser) {
        var page = browser.page.loginPage();
        page.navigate()
            .waitForElementVisible('body', 3000)
            .waitForElementPresent('@email', 2000)
            .verify.title('Log in - EMS')
            .setValue('@email', 'admin@admin')
            .setValue('@password', '@Password1')
            .click('@submit')
            .pause(3000)
            .assert.title('Home Page - EMS')

    }
}