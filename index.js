const webdriver = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');
const {Builder, By, Key, until} = require('selenium-webdriver');
const robinhood = require('./controllers/accountController')
require('dotenv').config()

let credentials = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}

// login to Robinhood
robinhood.login({credentials})
