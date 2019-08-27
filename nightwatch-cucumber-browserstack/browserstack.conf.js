const baseConfig = require('./nightwatch.conf')

const config = {
    ...baseConfig,

    webdriver:{
        'start_process': false, 
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    }
}

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.browserstack_user;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.browserstack_key;
config.test_settings.default.desiredCapabilities['browserstack.networkLogs'] = true;
config.test_settings.default.desiredCapabilities['browserstack.debug'] = true;

config.test_settings.firefox = {
    desiredCapabilities: {
        'os_version': '10',
        'browserName': 'Firefox',
        'browser_version': '64.0',
        ['browserstack.local']: false,
    }
}

//code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
    var test_settings = config.test_settings[i];
    test_settings['selenium_host'] = config.webdriver.host;
    test_settings['selenium_port'] = config.webdriver.port;
}

module.exports = config;