import { $, ElementFinder } from "Protractor"

export class XboxOneGames {
  public xBoxHeader: ElementFinder;
  public xBoxAllGames: ElementFinder;
  public mobileMenu: ElementFinder;

  constructor() {
    this.xBoxHeader = $("ul.consoleList > li.dropdown:nth-child(2)");
    this.xBoxAllGames = $(".xbox > div> li > a.boldLink");
    this.mobileMenu = $("#navContainer > div > div > nav > div > div.navbar-header > button")
  }
}
