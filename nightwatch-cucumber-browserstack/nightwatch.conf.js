module.exports = {
    src_folders: ["tests"],
    page_objects_path: "page-objects",
    globals_path: "test-data/data.js",
    
    "webdriver": {
        "start_process": true,
        // "server_path": "node_modules/.bin/chromedriver", 
        "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
        "port": 9515
    },

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}