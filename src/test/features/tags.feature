Feature: DemoWebShop Popular tags

Scenario Outline: Tags should be navigated to product page
  Given I want to be in the demowebshop "url"
  When I see the list of popular tags
  And I click the View All button
  And I click on "<TagName>" tag link
  Then I should be redirected to "<TagName>" tagged product page

Examples:
  | tagName   |
  | Digital   |
  | cell      |