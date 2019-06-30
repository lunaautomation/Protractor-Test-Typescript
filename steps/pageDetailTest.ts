import {HomePageHeaders} from "../PO/homePageHeaders.po";
import {by, browser, ExpectedConditions} from "protractor";
const { Given, Then, When } = require ('cucumber');
import { config } from "../config/config";
const HomeHeaders: HomePageHeaders =new HomePageHeaders();
const {expect} = require("chai");
const {client} = require ('protractor');
// const expect = chai.expect;


Given(/^I am on the front page of the website$/,  async() => {
  await expect(await browser.getTitle()).to.include('Gaming Specialist For Consoles, Games & Accessories!');
});
Given(/^I am on the front page of the website on mobile$/,  async() => {
  await browser.driver.manage().window().setSize(640, 1136);
  await HomeHeaders.mobileMenu.click();
  await expect(await browser.getTitle()).to.include('Gaming Specialist For Consoles, Games & Accessories!');
});

Given(/^I choose to list all Xbox One games$/, async() => {
await browser.actions().mouseMove(HomeHeaders.xBoxHeader).perform();
await HomeHeaders.xBoxAllGames.click();
await browser.wait(await ExpectedConditions.titleContains('Xbox One Games'), 5000);
});

When(/^I select (.*) from the list$/, async(gameName) => {
  await browser.actions().mouseMove(await browser.findElement(by.linkText(gameName))).perform();
await browser.findElement(by.linkText(gameName)).click();
  await browser.wait(await ExpectedConditions.titleContains(gameName), 5000);
});

Then(/^the page title (.*) should match the page detail$/, async(text) => {
  await  expect(await browser.getTitle()).to.include(text);
});
