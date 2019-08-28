@login-test
Feature: User login

    Scenario: Login to EMS website with valid credentials

        Given I am on the login page of EMS website
        When I enter correct login credentials
        And I click the submit button
        Then I should be navigated to home page of EMS