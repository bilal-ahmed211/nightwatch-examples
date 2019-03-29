
module.exports = {
  "@tags": ['page-object-login-test'],
  before: function (browser) {
    var ems = browser.page.loginPage();
    ems.navigate();
  },
  'Try Login with Blank credentials': function (browser) {
    var login = browser.page.loginPage();
    login.checkLoginWithBlankCredentials();
  },
  'Try Login with Valid Email and Blank Password': function (browser) {
    var login = browser.page.loginPage();
    var data = browser.globals;
    login.checkWithValidEmailAndBlankPassword(data.login.username, '');

  },
  'Test Login with Invalid Email and Valid Password': function (browser) {
    var login = browser.page.loginPage();
    var data = browser.globals;
    login.checkWithInvalidEmailAndValidPassword(data.login.wrongUsername, data.login.password)
  },
  'Try login with valid credentials': function (browser) {
    var login = browser.page.loginPage();
    var data = browser.globals;
    login.navigate()
      .emsLoginCheck(data.login.username, data.login.password);
  },
};