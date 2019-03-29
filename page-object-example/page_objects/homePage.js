homePage = {
    commands: {
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
    elements: {
        registerUser : {
            selector: "#PageContent > div > p > a"
        },
        registrationForm: {
            selector: '#PageContent > h2'
        }, 
        email: {
            selector: "#Input_Email"
        },
        password: {
            selector: "#Input_Password"
        }, 
        confirmPassword: {
            selector: "#Input_ConfirmPassword"
        },
        registerBtn : {
            selector: '#RegisterForm > button'
        },
    },

}

module.exports = {
    commands: [homePage.commands],
    elements: homePage.elements
}