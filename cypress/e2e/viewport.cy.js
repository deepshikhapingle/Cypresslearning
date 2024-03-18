describe("Viewports", () => {
    context("1280, 720p resolution", () => {

        beforeEach(() => {

            cy.visit("https://nichethyself.com/tourism/home.html");

            cy.viewport(1000, 650);

        });
        it("First test", { viewportHeight: 1000, viewportWidth: 700, defaultCommandTimeout: 7000 }, () => {
            cy.get('input[name="username"]')
                .type("stc123")
                .should("have.value", "stc123")
            cy.get("button").should("contain", "Tours");
            // varify if stc123 is apperaing on the page
            cy.get("button").then((tours) => {
                const tourText = tours.text();
                expect(tourText).to.contain("Tours");
                cy.wrap(tourText).should("contain", "Tours");

            })
        })
    })
})