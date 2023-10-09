/// <reference types="Cypress" />

describe("Orange HRM assignment", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });

    it("using alias", () => {
        cy.get('input[name="username"]').as("fullName");
        cy.get("@fullName").type("Admin");
        cy.get('input[type="password"]').as("PW");
        cy.get("@PW").type("admin123");
        cy.get(`.oxd-button`).click();
        cy.contains("a", "admin", { matchCase: false, log: true }).click();
        cy.contains("button", "add", { matchCase: false, log: true }).click();
        cy.get("ul.oxd-main-menu").within((ul) => {
            cy.get("li").should("have.length", 12);
            cy.get("li").first().should("have.text", "Admin");
            cy.get("li").last().should("have.text", "Buzz");
            cy.get("li").eq(1).should("have.text", "PIM");
        })
        cy.contains("a", "admin", { matchCase: false, log: true }).click();
        //cy.get("input[type='checkbox']").first().check({ force: true }); //
        cy.get("input[type='checkbox']").check({ force: true, multiple: true, log: false })
        cy.contains("dashboard", { matchCase: false, log: true }).click();
        cy.get("div[title='Apply Leave']")
        .prev()
        .parent()
        .prev()
        .prev()
        .prev()
        .find("button[title='Assign Leave']").click() // can use only "button" // find searches for childrens 
        cy.contains("a","Time")
        .parent()
        .siblings().each(list=> {
            cy.log(list.text())
        })

    })


})