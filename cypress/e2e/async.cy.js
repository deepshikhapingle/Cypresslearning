describe("Tourism Login Test Cases", () => {

    beforeEach(() => {
  
      cy.visit("https://nichethyself.com/tourism/home.html");
  
    });
  
   
  
    it("async Cypress - synchronus commands does not work", () => {
  
      cy.get('form[name="loginform"] button'); // Still nothing happening
  
      //  .click(); // Nope, nothing
  
   
  
      // Cypress.$ is synchronous, so evaluates immediately
  
      // there is no element to find yet because
  
      // the cy.visit() was only queued to visit
  
      // and did not actually visit the application
  
      let el = Cypress.$('input[name="username"]', { log: true }); // evaluates immediately as []
  
   
  
      if (el.length) {
  
        // evaluates immediately as 0
  
        cy.get('input[name="password"]');
  
      } else {
  
        // this will always run
  
        // because the 'el.length' is 0
  
        // when the code executes
  
        cy.get('input[name="username"]').type("stc123");
  
      }
  
    });
  
   
  
    it("async Cypress - synchronus commands works", () => {
  
      cy.get('form[name="loginform"] button') // Still nothing happening
  
        .click() // Nope, nothing
  
        .then(() => {
  
          let el = Cypress.$('input[name="username"]', { log: true }); // evaluates immediately as []
  
   
  
          if (el.length) {
  
            // evaluates immediately as 0
  
            cy.get('input[name="password"]');
  
          } else {
  
            // this will always run
  
            // because the 'el.length' is 0
  
            // when the code executes
  
            cy.get('input[name="username"]').type("stc123");
  
          }
  
        });
  
      // Cypress.$ is synchronous, so evaluates immediately
  
      // there is no element to find yet because
  
      // the cy.visit() was only queued to visit
  
      // and did not actually visit the application
  
    });
  
   
  
    it.only("then and wrap", () => {
  
      cy.get('input[name="username"]').then((username) => {
  
        //username.type("stc123");
  
        cy.wrap(username).type("stc123");
  
      });
  
    });
  
  });
  
   
  
  /*
  
  Scroll the element into view.
  
  Ensure the element is not hidden.
  
  Ensure the element is not disabled.
  
  Ensure the element is not detached.
  
  Ensure the element is not readonly.
  
  Ensure the element is not animating.
  
  Ensure the element is not covered.
  
  Scroll the page if still covered by an element with fixed position.
  
  Fire the event at the desired coordinates.
  
  Whenever Cypress cannot interact with an element,
  
  it could fail at any of the above steps.
  
  You will usually get an error explaining why
  
  the element was not found to be actionable.
  
   
  
  */
  
   
  
  /*
  
  Cypress checks a lot of things to determine an element's visibility.
  
  The following calculations factor in CSS translations and transforms.
  
   
  
  An element is considered hidden if:
  
  Its width or height is 0.
  
  Its CSS property (or ancestors) is visibility: hidden.
  
  Its CSS property (or ancestors) is display: none.
  
  Its CSS property is position: fixed and it's offscreen or covered up.
  
  Any of its ancestors hides overflow*
  
  AND that ancestor has a width or height of 0
  
  AND an element between that ancestor and the element is position: absolute
  
  Any of its ancestors hides overflow*
  
  AND that ancestor or an ancestor between it and that ancestor is its offset parent
  
  AND it is positioned outside that ancestor's bounds
  
  Any of its ancestors hides overflow*
  
  AND the element is position: relative
  
  AND it is positioned outside that ancestor's bounds
  
  *hides overflow means it has overflow: hidden, overflow-x: hidden, overflow-y: hidden, overflow: scroll, or overflow: auto
  
  */