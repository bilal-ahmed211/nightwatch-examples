const page = {
    url: "http://10.10.10.2:8081",
    /*function () {
            return this.api.launch_url + "/login"
                }
            */

    elements: {
        appName: "body > nav > div > div.navbar-header > a",
        email: "#Input_Email",
        password: "#Input_Password",
        submit: "button[type=submit]",
        emailErrorMsg: "#Input_Email-error",
        passErrorMsg: "#Input_Password-error",
        invalidEmailMsg: "#PageContent > div > div > section > form > div.text-danger.validation-summary-errors > ul > li",
        
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
        checkWithValidEmailAndBlankPassword: function (email, password) {
            return this.pause(2000)
                .clearValue('@email')
                .setValue('@email', email)
                .clearValue('@password')
                .setValue('@password', password)
                .click('@submit')
                .pause(2000)
                .assert.elementPresent('@passErrorMsg')
                .assert.containsText('@passErrorMsg', 'The Password field is required.')
        },
        checkWithInvalidEmailAndValidPassword: function (email, password) {
            return this.pause(2000)
                .clearValue('@email')
                .pause(2000)
                .setValue("@email", email)
                .clearValue('@password')
                .setValue("@password", password)
                .click("@submit")
                .pause(2000)
                .waitForElementVisible("@invalidEmailMsg", 3000)
                .assert.containsText('@invalidEmailMsg', 'The Email field is not a valid e-mail address.')
        },
        emsLoginCheck: function (email, password) {
            return this.pause(2000)
                .waitForElementVisible('body', 3000)
                .waitForElementPresent('@email', 2000)
                .verify.title('Log in - EMS')
                .clearValue('@email')
                .setValue('@email', email)
                .clearValue('@password')
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