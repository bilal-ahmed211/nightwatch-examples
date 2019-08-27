module.exports = {
    "@tags": ['login-test'],
    before: function (browser) {
        let ems = browser.page.loginPage();
        ems.navigate();
    },
    'Try login with valid credentials': function (browser) {
        var login = browser.page.loginPage();
        var data = browser.globals;
        login
            .navigate()
            .emsLoginCheck(data.login.username, data.login.password)
            .assert.title('Home Page - EMS', 'User has successfully logged in')

    },
};