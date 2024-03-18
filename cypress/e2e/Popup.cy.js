describe("Pop-ups", () => {

    beforeEach(() => {

        cy.visit("https://nichethyself.com/tourism/home.html")
    });
    it("Contact us window", () => {
        cy.window().then((win) => {
            const stub = cy.stub(win, "open").callsFake(url => {
                win.location.href = "https://nichethyself.com/tourism/contact.html"
            }).as("contactus");

        });

        cy.contains("button", "Contact us!").click();
        cy.get("@contactus").should("be.called");
        cy.get(".glyphicon.glyphicon-search");
        cy.get(".glyphicon-search").click();
    });

})