/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nichethyself.com/tourism/home.html');
    cy.get(`input[name="username"]`).type ("stc123");
    cy.get(`input[name="password"]`).type ("12345");
    cy.get(`#loginsection > form > .btn`).click() ; 
    //cy.get("#loginsection > form").submit();
    //cy.get(`form[name=form]button[name=submit]`).click()
    cy.title().should("eq","My account"); // to check the page is correct we are landed on here eq means equal to
    cy.url().should("include", "myaccount.html?");// to check the URL is correct - includes - last line of the URL not user name and password
    
  })

    })

    // #tabs-1 > p:nth-child(3) > input[type=radio]:nth-child(1)