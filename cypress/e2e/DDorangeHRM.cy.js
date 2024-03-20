describe("Hard coded data replacement orange HRM", () => {
    it("Login function", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("orangelogin.json").then((mydata) => {
            cy.get('input[name="username"]').type(mydata.user);
            cy.get('input[name="password"]').type(mydata.password);
            cy.get(`.oxd-button`).click();
        })
    })
})