module.exports = {
    '@tags': ['expectStyle'],
    'Simple Login Test - Expect Style': function (browser) {
        browser
        .url('http://10.10.10.2:8081')
        browser.expect.element('body').to.be.visible.before(3000)
        browser.verify.title('Log in - EMS')
        browser.expect.element('#Input_Email').to.be.present.before(2000)
        browser.setValue('#Input_Email', 'admin@admin')
        browser.expect.element('#Input_Password').to.be.present
        browser.setValue('#Input_Password', '@Password1')
        browser.click('button[type=submit]')
        browser.pause(3000)
        browser.expect.element('#PageContent > div > h1').text.to.equal('Welcome to Online Certification Exam Portal!')
    },

}