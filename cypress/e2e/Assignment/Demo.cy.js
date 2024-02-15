// 3. DemoQA Form

// 1. https://demoqa.com/automation-practice-form
// 2. Type your Name., Last Name and Email. 
// 3. verify what was typed is acgtually there. 
// 4. Select Gender and verify that it is selected
// 5. Select your hobbies
// 6. Select State and City.

describe("Demo form", () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/automation-practice-form")
    })

    it("test3", () => {

        cy.get("#firstName").type("Deepshikha").should("have.value", "Deepshikha");
        cy.get("#lastName").type("Pingle").should("have.value", "Pingle");;
        cy.get("#userEmail").type("deepshikha@incubyte.co").should("have.value", "deepshikha@incubyte.co");
        cy.get("#gender-radio-2").click({ force: true }).should("be.checked");
        cy.get("#userNumber").type("8291204658");
        cy.get('div>input[id=hobbies-checkbox-1]').check({ force: true });
        cy.get("#hobbies-checkbox-2").check({ force: true });
        cy.get("#hobbies-checkbox-3").check({ force: true });
        cy.get("#state").click();
        cy.contains("Haryana").click({ force: true });
        cy.get("#city").click();
        cy.contains("Karnal").click({ force: true }).click();


    })
})