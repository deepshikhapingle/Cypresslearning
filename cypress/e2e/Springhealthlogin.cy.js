describe ("SH Login",() => {

beforeEach(() => {

    cy.visit("https://members.staging.springtest.us/sign_in")
})
it("login",()=>{
cy.get('input[name=email]').type("cleta_2619.gerlach@yahoo.com")
cy.get('input[name=password]').type("foobarbazz")
cy.get('button[data-cy=login-submit]').click().then(()=>{
    cy.title().should("eq","Spring Health - Home")


})
cy.get('button[data-cy=member-right-dropdown]').click()
cy.contains("Logout").click()

})


})