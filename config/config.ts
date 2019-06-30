import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: false,

  baseUrl: "http://www.game.co.uk",

  capabilities: {
    browserName: "chrome",
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    "../../features/*.feature",
  ],

  onPrepare: () => {
    browser.manage().window().maximize();
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
