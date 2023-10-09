/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nichethyself.com/tourism/home.html');
    cy.get(`input[name="username"]`).type ("stc123");
    cy.get(`input[name="password"]`).type ("12345");
    cy.get(`#loginsection > form > .btn`).click() ; 
    //cy.get("#loginsection > form").submit();
    cy.title().should("eq","My account");
    cy.url().should("include", "myaccount.html?");
    
  })

    })

    // #tabs-1 > p:nth-child(3) > input[type=radio]:nth-child(1)