import { $, ElementFinder } from "Protractor"

export class HomePageHeaders {
  public xBoxHeader: ElementFinder;
  public xBoxAllGames: ElementFinder;
  public mobileMenu: ElementFinder;
  public titleText : string;

  constructor() {
    this.xBoxHeader = $("a[href='/destination-xbox-one?cm_mn=TopNav-_-XboxOne-_-Main-Main']");
    this.xBoxAllGames = $("a[href='/en/games/xbox-one-games/?cm_mn=TopNav-_-XboxOne-_-Main-AllGames']");
    this.titleText ="GAME | Gaming Specialist For Consoles, Games & Accessories!";
    this.mobileMenu = $("#navContainer > div > div > nav > div > div.navbar-header > button")
  }
}
