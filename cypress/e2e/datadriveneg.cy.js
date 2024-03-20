describe("Hard coded data replacement", () => {
    it("Login function", () => {

        cy.visit("https://nichethyself.com/tourism/home.html");
        cy.fixture("Logindata.json").then((mydata) => {
            cy.get('input[name="username"]').type(mydata.user);
            cy.get('input[name="password"]').type(mydata.password);
            cy.get('form[name="loginform"]').submit();
        })
    })
})