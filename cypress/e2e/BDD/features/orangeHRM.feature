Feature: This is A feature test login functionality on Orange HRM.
    Scenario: Login with Valid Credentials
        Given User is on HomePage
        When User enters the "Admin" and "admin123"
        Then User should login and land on "Dashboard"