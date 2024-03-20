const {
    Given,
    When,
    Then,

} = require("@badeball/cypress-cucumber-preprocessor")
//         Given User is on Home Page
//         When User enters "Admin" and "admin123"
//         Then User should login and land on "Dashboard"

Given("User is on HomePage", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

When("User enters the {string} and {string}", (user, pass) => {
    cy.get(`input[name="username"]`).type(user);
    cy.get(`input[name="password"]`).type(pass)
});

Then("User should login and land on {string}", (heading) => {
    cy.get(".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module").should("contain", "Dashboard")
})


