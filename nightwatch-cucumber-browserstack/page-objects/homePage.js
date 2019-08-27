const homePage = {
    commands: {

        elements: {
            registerUser: "#PageContent > div > p > a",
            registrationForm: '#PageContent > h2',
            email: "#Input_Email",
            password: "#Input_Password",
            confirmPassword: "#Input_ConfirmPassword",
            registerBtn: '#RegisterForm > button',
        },
        createUser: function () {
            var data = this.api.globals
            return this.pause(2000)
                .waitForElementVisible(this.elements.registerUser, 2000)
                .click(this.elements.registerUser)
                .waitForElementPresent(this.elements.registrationForm, 2000)
                .verify.containsText(this.elements.registrationForm, 'Register')
                .setValue(this.elements.email, data.register.email)
                .setValue(this.elements.password, data.register.password)
                .setValue(this.elements.confirmPassword, data.register.confirmPassword)
                .click(this.elements.registerBtn)
                .pause(3000)
                .assert.containsText('#PageContent > span', 'Saved successfully')
        }
    },

}

module.exports = {
    commands: [homePage.commands],
    elements: homePage.elements
}