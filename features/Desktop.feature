Feature: Desktop
  @Desktop
  Scenario Outline: Check game details match their link text

    Given  I am on the front page of the website
    And I choose to list all Xbox One games
    When I select <gameName> from the list
    Then the page title <gameName> should match the page detail

    Examples:
      | gameName                |
      | Red Dead Redemption 2 |
      | Watch Dogs Legion         |
