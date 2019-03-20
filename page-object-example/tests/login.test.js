var data = require('../data/login')
module.exports = {
  before: function (browser) {
    var ems = browser.page.loginPage();
    ems.navigate();
  },
  'Simple Login Test': function (browser) {
    var login = browser.page.loginPage();
    login.checkLoginWithBlankCredentials();
  },

  'Try Login with Valid Email and Blank Password': function (browser) {
    var login = browser.page.loginPage();
    login.checkWithValidEmailAndBlankPassword(data.username, '');

  },
  'Test Login with Invalid Email and Valid Password': function (browser) {
    var login = browser.page.loginPage();
    login.checkWithInvalidEmailAndValidPassword(data.username, data.password)
  },
  'Try login with valid credentials': function (browser) {
    var login = browser.page.loginPage();
    login.navigate()
      .emsLoginCheck(data.username, data.password);
  },



};