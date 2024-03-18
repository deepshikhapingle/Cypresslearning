describe("Understanding Env variable", () => {

    beforeEach(() => {

        cy.visit("https://the-internet.herokuapp.com/iframe")
    })
    it("reading env variable", () => {
        Cypress.env();
        Cypress.env("login_url");
        Cypress.env("products_url");

    })

})