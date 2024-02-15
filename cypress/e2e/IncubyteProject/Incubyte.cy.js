describe("Incubyte",()=>{

    beforeEach (()=>{
        cy.visit("https://www.incubyte.co/")
    })

    it ("Test",()=>{
        cy.title().should("eq" , "Incubyte | Accelerating Modernization")



    })
})  