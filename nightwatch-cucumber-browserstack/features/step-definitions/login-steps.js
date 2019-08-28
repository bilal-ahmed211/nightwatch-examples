const {
    client
} = require('nightwatch-api');
const {
    Given,
    Then,
    When
} = require('cucumber');

Given('I am on the login page of EMS website', function () {
    let loginPage = client.page.loginPage()
    return loginPage
        .navigate() 
});
When('I enter correct login credentials', function () {
    let data = client.globals
    let loginPage = client.page.loginPage()

    return loginPage
        .setValue('@email', data.login.username)
        .setValue('@password', data.login.password)

});
When('I click the submit button', function () {
    let loginPage = client.page.loginPage()

    return loginPage
        .click("@submit")
        .pause(2000)
});
Then('I should be navigated to home page of EMS', function () {
    return client.assert.title('Home Page - EMS', 'successfully logged into ems and navigate to home page')
});
