const webdriver = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get('https://robinhood.com/');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();