describe ("Amazon Login",() => {

beforeEach(() => {

    cy.visit("https://www.amazon.in/-/hi/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fgift&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0")
})
it("login",()=>{
cy.get('input[name=email]').type("8291204689")
cy.get('input[name=password]').type("Ranu1234")
cy.get('input[id=signInSubmit]').click().then(()=>{
    cy.title().should("eq","Amazon")


})
// cy.get('button[data-cy=member-right-dropdown]').click()
// cy.contains("Logout").click()

})


})