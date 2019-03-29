module.exports = {
        "@tags": ['page-object-create-user-test'],
        before: function (browser) {
            var data = browser.globals;
            var page = browser.page.loginPage();
            page.navigate()
            .emsLoginCheck(data.login.username, data.login.password);
        },
        "Create New User after Login has completed": function (browser) {
            var home = browser.page.homePage();
                home.createUser();
        }
    }