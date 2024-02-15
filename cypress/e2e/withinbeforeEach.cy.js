describe("Tourism Login Test Cases", () => {

beforeEach(() => {
  
  cy.visit("https://nichethyself.com/tourism/home.html");
  
    });
  
   
    
      it("within example", () => {
      
      cy.get("ul.nav").within((ul) => {
        
        cy.get("li").should("have.length", 9);
        
        cy.get("li").first().should("have.text", "My Account");
        
        cy.get("li").last().should("have.text", "Contact us!");
        
        cy.get("li").eq(1).should("have.text", "Flights");
  
      });
  
    });
  
   
  
    it("Using within in NT Login", () => {
  
      cy.get('form[name="loginform"]').within((form) => {
  
        cy.get('input[name="username"]').type("stc123"); //this will click on all the 5 buttons
  
      });
  
    });
  
   
  
    it("Using contains", () => {
  
      cy.contains("Contact us!").click();
  
      cy.contains("button", "Contact us!");
  
      cy.contains("button", "Contact Us!", { matchCase: false, log: false });
  
    });
  
   
  
    it("Handling checkbox", () => {
  
      cy.visit("https://nichethyself.com/tourism/customised.html");
  
      // cy.get('form[name="internationalf"]')
  
      //   .find("div")
  
      //   .eq(1)
  
      //   .find("input")
  
      //   .click({ multiple: true });
  
   
  
      //     cy.get('form[name="internationalf"]')
  
      //       .find("div")
  
      //       .find("input")
  
      //       .not("[disabled]")
  
      //       .click({ multiple: true });
  
      //   });
  
   
  
      cy.get('form[name="internationalf"]')
  
        .find("input") //12
  
        .filter("input[type='checkbox']") //4
  
        .not("[disabled]")
  
        .click({ multiple: true });
  
    });
  
   
  
    it("Learn more methods related to multiple elements", () => {
  
      cy.get("div.secondarynav").children().eq(0).find("button");
  
      cy.get("div.secondarynav").parent();
  
      cy.get(".w3-dropdown-hover")
  
        .parent()
  
        .prev()
  
        .prev()
  
        .prev()
  
        .prev()
  
        .find('a[href="#loginsection"]')
  
        .click();
  
   
  
      cy.visit("https://nichethyself.com/tourism/customised.html");
  
      cy.contains("England")
  
        .siblings("li")  // "li" element
  
        .each((li) => {  // li is a variable name 
  
          cy.log(li.text());
  
        });
  
    });
  
   
  
    it("using alias", () => {
  
      cy.visit("https://nichethyself.com/tourism/review.html");
  
      cy.get('input[name="name"]').as("fullName");
  
      //
  
      ///
  
      ///
  
      cy.get("@fullName").type("Steve Jobs");
  
    });
  
  });