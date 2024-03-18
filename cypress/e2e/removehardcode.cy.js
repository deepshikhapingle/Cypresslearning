describe('template spec', () => {
    it('passes', () => {
        cy.visit(("/login"));
        cy.get(`input[name="username"]`).type(Cypress.env("username"));
        cy.get(`input[name="password"]`).type(Cypress.env("password"));
        cy.get(`.oxd-button`).click();
        //cy.get("#loginsection > form").submit();


    })
})
