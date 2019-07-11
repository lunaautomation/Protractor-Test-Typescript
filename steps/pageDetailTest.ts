import {HomePageHeaders} from "../PO/homePageHeaders.po";
import {by, browser, ExpectedConditions} from "protractor";
const { Given, Then, When } = require ('cucumber');
const HomeHeaders: HomePageHeaders =new HomePageHeaders();
const {expect} = require("chai");


Given(/^I am on the front page of the website$/,  async() => {
  await expect(await browser.getTitle()).to.include('Gaming Specialist For Consoles, Games & Accessories!');
  await HomeHeaders.mobileMenu.isDisplayed().then(async function(result) {
    if ( result ) {
      await HomeHeaders.mobileMenu.click();
    } else {
      //Do nothing
    }
  });
});

Given(/^I choose to list all Xbox One games$/, async() => {
await browser.actions().mouseMove(HomeHeaders.xBoxHeader).perform();
await HomeHeaders.xBoxAllGames.isDisplayed();
await HomeHeaders.xBoxAllGames.click();
await ExpectedConditions.titleContains('Xbox One Games');
});

When(/^I select (.*) from the list$/, async(gameName) => {
  await browser.actions().mouseMove(await browser.findElement(by.linkText(gameName))).perform();
await browser.findElement(by.linkText(gameName)).click();
  await ExpectedConditions.titleContains(gameName);
});

Then(/^the page title (.*) should match the page detail$/, async(text) => {
  await  expect(await browser.getTitle()).to.include(text);
});
