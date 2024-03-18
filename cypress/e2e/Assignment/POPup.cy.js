// 1. Goto url - https://alapanme.github.io/testing-cypress.html
// 2. Click on "Try it" button.
// 3. Handle the pop-up which appears
// 4. Verify that it displays text "Welcome to the-internet" at the top

describe("PopUP", () => {

    beforeEach(() => {
        cy.visit("https://alapanme.github.io/testing-cypress.html")
    })

    it("test1", () => {
        cy.window().then((win) => {
            const stub = cy.stub(win, "open").callsFake(url => {
                win.location.href = "https://the-internet.herokuapp.com/"
            }).as("Tryit");

        })
        cy.contains("button", "Try it").click();
        cy.get("@Tryit").should("be.called");
        cy.get("h1[class='heading']").should('contain', 'Welcome to the-internet')



    })
})

