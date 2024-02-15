describe("dropdown1",()=>{

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")
    })

    it("test2", ()=>{

       cy.get("#dropdown").select("Option 2").invoke("val").should("eq", "2");
        cy.get('option[value="2"]').should("be.selected");
    })
})