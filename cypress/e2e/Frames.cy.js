describe("Handling tab", () => {

    beforeEach(() => {

        cy.visit("https://the-internet.herokuapp.com/iframe")
    });
    it("handling iframe", () => {
        const myFrame =
            cy.get("iframe#mce_0_ifr")//or "iframe[id=mce_0_ifr]" or #mce_0_ifr
                .its("0.contentDocument.body")
                .then(cy.wrap);

        myFrame.clear().type("This is part of cypress training");

    })
    it.only("handling iframe using plugin", () => {
        cy.frameLoaded("iframe#mce_0_ifr");
        cy.iframe("iframe#mce_0_ifr").find("p").type("Hello World!")
    })

});