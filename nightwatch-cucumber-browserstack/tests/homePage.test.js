module.exports = {
    "@tags": ['create-user-test'],
    before: function (browser) {
        let data = browser.globals;
        let page = browser.page.loginPage();
        page
            .navigate()
            .emsLoginCheck(data.login.username, data.login.password);
    },
    "Create New User after Login has completed": function (browser) {
        let home = browser.page.homePage();
        home
            .createUser();
    }
}