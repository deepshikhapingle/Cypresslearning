/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(`input[name="username"]`).type("Admin");
    cy.get(`input[name="password"]`).type(Cypress.env("password"));
    cy.get(`.oxd-button`).click();
    //cy.get("#loginsection > form").submit();


  })
})

