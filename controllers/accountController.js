// require the webDriver
const webdriver = require('selenium-webdriver');
// // specify the browser
const safari = require('selenium-webdriver/safari');
const {Builder, By, Key, until} = require('selenium-webdriver');


module.exports = {
    login: async ({credentials}) => {
    console.log("Logging "+ credentials.username + " into Robinhood")
    let driver = await new Builder().forBrowser('safari').build();
    try {
        // Navigate to Url
        await driver.get('https://robinhood.com/login');
        // Enter then username
        await driver.wait(until.elementLocated(By.name('username'))).sendKeys(credentials.username, Key.TAB, credentials.password, Key.ENTER)
        // Enter the password
        await driver.wait(until.elementLocated(By.name('password')))

        // let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        // console.log(await firstResult.getAttribute('textContent'));
    }catch (err) {
        console.log(err)
        driver.quit();
    }
    }

}
