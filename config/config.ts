import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  baseUrl: "http://www.game.co.uk",

  capabilities: {
    browserName: "chrome",
  },

  params: {
    height: 1000,
    width: 1000
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    "../../features/*.feature",
  ],

  onPrepare: () => {
    browser.manage().window().setSize(browser.params.width , browser.params.height);
    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().timeouts().pageLoadTimeout(10000);
    browser.manage().timeouts().setScriptTimeout(10000);
    Reporter.createDirectory(jsonReports);
  },

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../typeScript/steps/*.js", "../../typeScript/support/*.js"],
    strict: true,
    tags: "@Mobile or @Desktop"
  },

  onComplete: () => {
    Reporter.createHTMLReport();
  },

};
