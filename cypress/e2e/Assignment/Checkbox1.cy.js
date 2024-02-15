describe("checkbox",()=>{

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
    })

    it("test1",()=>{
        cy.get('form > input:nth-child(1)').check().should("be.checked");
        cy.get('form > input:nth-child(3)').uncheck().should("not.be.checked")
    })
})