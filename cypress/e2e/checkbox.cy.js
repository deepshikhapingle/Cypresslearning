describe("Checkbox",() => {

    beforeEach(() => {

        cy.visit("https://cookbook.seleniumacademy.com/Config.html")
    });
// check box and radio buttons
it("Checkbox",()=>{
    cy.get("input[name='abs']").check();
    // .should("be.checked")(verification)
    // .should("be.disabled")
    // .should("not.be.checked")
    cy.get("input[name='airbags']").check();
    cy.get("input[name='airbags']").uncheck();
    cy.get("input[name='ledheadlamp").check({force:true});// to checking the disabled option //not idealy use this in real time scenarios
    cy.get("input[value='Diesel']").check();
    cy.get("input[name='parksensor']").check();


})
})