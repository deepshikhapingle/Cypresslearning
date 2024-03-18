describe("Handling tab", () => {

    beforeEach(() => {

        cy.visit("https://the-internet.herokuapp.com/windows")
    });

    it("Handling tabs", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.contains("a", "Click Here").invoke("removeAttr", "target").click();
        cy.url().should("include", "new")
        cy.get("h3").should("have.text", "New Window");

    })
});