describe("Dropdown", () => {

    beforeEach(() => {

        cy.visit("https://cookbook.seleniumacademy.com/Config.html")
    });

    it("Dropdown", () => {
        cy.get("select[name='make']  option:selected").should("have.text", "BMW")
        cy.get("select[name='make']  option")
        cy.get("select[name='make']").select("Audi").invoke("val").should("eq", "audi")// invoking the attribute
        //cy.get("select[name='make'] > option");
        /*
            3ways to select element in dropdown
            1.visible text
            2.value attribute
            3. pstion (starts with 0)
    
        */

        cy.get("select[name='color']").select("Red")
        cy.get("[name='color']").select("Silver").select(["rd", "bl"]);// value attribute
        cy.get("[name='color']").select([1, 3]); // position
        cy.get("[name='color'] option:selected").eq(0).invoke("val").should("eq", "wt")
        cy.get("[name='color']").select([1, 3]).invoke("val").should("deep.equal", ["wt", "br"]);
    })

})