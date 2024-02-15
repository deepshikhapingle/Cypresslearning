describe("OHRM Login", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    });
it("understand then and wrap",() => {
 cy.get('input[name="username"]').then((username) =>{
cy.wrap(username).type("Admin")
cy.get('input[name="password"]').then((password) =>{
    cy.wrap(password).type("admin123")
})
})
})
})