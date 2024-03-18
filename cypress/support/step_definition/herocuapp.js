const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

//   Given User is on Home Page
//     When User Navigates to Authentication Page
//     When User enters "tomsmith" and "SuperSecretPassword!"
//     Then Message displayed "You logged into a secure area!"

Given("User is on Home Page", () => {
    cy.visit("https://the-internet.herokuapp.com");
})