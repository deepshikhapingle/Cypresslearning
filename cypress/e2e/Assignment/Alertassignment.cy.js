// 4. Alerts
// 1. http://the-internet.herokuapp.com/javascript_alerts
// 2. Click on "Click for JS Alert" button. 
// 3. The message displayed on alert is "I am a JS Alert"
// 4. Verify that Result displays "You successfully clicked an alert" 
// 5. Click on "Click for JS Confirm" button. 
// 3. The message displayed on alert is "I am a JS Alert"
// 4. Implementing Clicking on "OK"
// 5. Verify that Result displays "You clicked: Ok" 
// 6. Click on "Click for JS Confirm" button. 
// 7. Implementing Clicking on "Cancel"
// 8. Verify that Result displays "You clicked: Cancel" 
// 9. Verify that the Result is displaying text with green color text

describe('Alert', () => {

    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
    })
    it('Handle alert Ok', () => {
        cy.get('button[onclick="jsAlert()"]').click();
        cy.on('window:alert', (alertText) => {
            const expectedMessage = 'I am a JS Alert';
            expect(alertText).to.equal(expectedMessage);
            cy.get("#result").should("have.text", "You successfully clicked an alert")

            cy.get('button[onclick="jsConfirm()"]').click();
            cy.on("window:confirm", () => true);
            cy.get("#result").should("have.text", "You clicked: Ok")


        })

    })

    it('Handle alert Cancel', () => {
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on("window:confirm", () => false);
        cy.get("#result").should("have.text", "You clicked: Cancel")
        cy.get("#result").should("have.css", "color").and("eq", "rgb(0, 128, 0)")
    })

})