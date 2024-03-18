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
});

When("User Navigates to Authentication Page", () => {
    cy.contains("a", "Form Authentication").click();
});
When("User enters {string} and {string}", (user, pass) => {
    cy.get("#username").type(user);
    cy.get("#password").type(pass);
    cy.get(".radius").click();
});
Then("Message displayed {string}", (message) => {
    cy.get("#flash").should("contain", message);
});