describe("Handle Alert, confirm", () => {

    beforeEach(() => {
  
      cy.visit("https://nichethyself.com/tourism/home.html");
  
    });

    it("Handeling Alert boxTest",()=>{
        cy.get('form[name="loginform"] button').click();
        cy.on("window:alert", () => (txt) =>{
        expect(txt).to.equal("please enter Username");

        });

    });

    it("Handeling Confirm boxTest",()=>{
        cy.get('img[id="logo"]').click({force:true});
        cy.on("window:alert", () => (txt) =>{
            expect(txt).to.equal("Do you wanna leave the page?");

    });

})

    it("Handeling Confirm boxTest using stub",()=>{


     const mystub = cy.stub();
        cy.on("window:confirm", mystub);
        cy.get('img[id="logo"]').click({force:true}).then(()=>{

            expect(mystub(0)).to.be.calledWith("Do you wanna leave the page?");
        });
        

    })

    it("Handeling Confirm boxTest using by ok",()=>{


        cy.get('img[id="logo"]').click({force:true});
        cy.on("window:alert", () => (txt) =>{
            expect(txt).to.equal("Do you wanna leave the page?");
           });

})

it("Handeling Confirm boxTest with cancel",()=>{


    const mystub = cy.stub();
      
       cy.get('img[id="logo"]').click({force:true}).then(()=>{
        cy.on("window:confirm", ()=> false);

       });
})
})
