Feature: Validating the login

Background: 
    Given User navigates to the Demowebshop application
    And User clicks on the login link

Scenario Outline: Login with valid and invalid credentials
  And I enter "<Email>","<Password>" in the appropriate field
  And I click on the login button
  Then the login result should be "<Result>" displayed

Examples:
|Email           |Password       |Result                                 |
|wsedf@gmail.com |CiK@4#UWzuiPDc |wsedf@gmail.com                        |
|wsedf@gmail.com |Password       |The credentials provided are incorrect |
|                |CiK@4#UWzuiPDc |No customer account found              |
|wsedf@gmail.com |               |The credentials provided are incorrect |