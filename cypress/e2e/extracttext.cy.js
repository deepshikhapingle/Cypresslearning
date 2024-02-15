describe("Tourism Login Test Cases", () => {

    beforeEach(() => {
  
      cy.visit("https://nichethyself.com/tourism/home.html");
  
    });
    it("extracting text from element" ,()=> {
      cy.get('input[name="username"]')
      .type("stc123")
      .should("have.value", "stc123")
      cy.get("button").should("contain","Tours");
      // varify if stc123 is apperaing on the page
      cy.get("button").then((tours) => {
        const tourText = tours.text();
        expect (tourText).to.contain("Tours");
        cy.wrap(tourText).should("contain", "Tours");
        
        cy.get("button").invoke("text").then((allButtonText) => {

           expect(allButtonText).to.contains("Tours");


           })

           cy.get('input[name="username"]')
           .invoke ('attr','placeholder')
           .should("contain","Username");
           cy.get('input[name="username"]').clear()
           .type("stc123");
           cy.get('input[name="username"]')
           .invoke("prop","value")
           .should("contain","stc123")
        })


    })



    });