module.exports = {
    'Simple Login Test - Using Xpath': function (browser) {
        browser
        .url('http://10.10.10.2:8081')
        .waitForElementVisible('body', 3000)
        .verify.title('Log in - EMS')
        .useXpath()
        .waitForElementVisible('//input[@id="Input_Email"]', 2000)
        .setValue('//input[@id="Input_Email"]', 'admin@admin')
        .setValue('//input[@id = "Input_Password"]', '@Password1')
        .click('//button[@type="submit"]')
        .pause(3000)
        .assert.title('Home Page - EMS')
    
    }
}
