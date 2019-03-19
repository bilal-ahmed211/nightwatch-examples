var page = {
    url: "http://10.10.10.2:8081",
    elements: {
        appName: "body > nav > div > div.navbar-header > a",
        email: {selector: "#Input_Email"},
        password: {selector: "#Input_Password"},
        submit:   {selector: "button[type=submit]"},
        emailErrorMsg: {selector: "#Input_Email-error"},
        passErrorMsg: {selector:"#Input_Password-error"},
        invalidEmailMsg: {selector: "#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li"}
    }, 

    functions: {
        checkLoginWithBlankCredentials: function () {
            return this.pause(1000)
            .waitForElementPresent('@email', 3000)
            .assert.title('Log in - EMS')
            .click('@submit')
            .waitForElementVisible('@emailErrorMsg', 2500)
            .assert.containsText('@emailErrorMsg', 'The Email field is required')
            .assert.containsText('@passErrorMsg', 'The Password field is required.')
        }, 
        checkWithValidEmailAndBlankPassword: function (username, pass) {
            return this.pause(2000)
            .setValue('@email', username)
            .setValue('@password', pass)
            .click('@submit')
            .pause(2000)
            .assert.elementPresent('@passErrorMsg')
            .assert.containsText('@passErrorMsg', 'The Password field is required.')
        },
        checkWithInvalidEmailAndValidPassword: function (username, pass) {
            return this.pause(2000)
            .setValue("@email", username)
            .setValue("@password", pass)
            .click("@submit")
            .pause(2000)
            .waitForElementPresent("@invalidEmailMsg", 3000)
            .assert.containsText('@invalidEmailMsg', 'The Email field is not a valid e-mail address.')
        }, 
        emsLoginCheck: function (username, password) {
            return this.pause(2000)
            .waitForElementVisible('body', 3000)
            .waitForElementPresent('@email', 2000)
            .verify.title('Log in - EMS')
            .setValue('@email', username)
            .setValue('@password', password)
            .click('@submit')
            .pause(3000)
            .assert.title('Home Page - EMS')
        }
    }
}
module.exports = {
    commands: [page.functions],
    elements: page.elements,
    url: page.url
}