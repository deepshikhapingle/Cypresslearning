let mydata1
describe("Incubyte", () => {

    beforeEach(() => {
        cy.fixture("Deepshikha.json").then((mydata) => {
            mydata1 = mydata;
        })
        cy.visit("https://www.incubyte.co/")
    })

    it("Test 1 Home page confirmation", () => {
        cy.title().should("eq", "Incubyte | Accelerating Modernization")

    })
    it("Test 2 check Code Aid option", () => {
        cy.get("#w-dropdown-toggle-0").click();
        cy.get('a[data-w-id="3bb5188b-bc1c-80b7-1ec2-7086dc1f1189"]').click();
        cy.title().should("eq", "CodeAid");
        cy.get(".link-block-21.w-inline-block").click();
        cy.title().should("eq", "Schedule Free Demo");
        fillform();

    })

    it("Test 3 check Services option", () => {
        cy.get("#w-dropdown-toggle-0").click();
        cy.get('a[data-w-id="3bb5188b-bc1c-80b7-1ec2-7086dc1f118b"]').click();
        cy.title().should("eq", "Services");
        cy.get(".text-block-94").contains("Start your free two-week Iteration Zero, no strings attached").click();

    })
    it(" Test 4 Handle Alert", () => {
        cy.visit("https://calendly.com/rushali-incubyte");
        cy.get("#onetrust-banner-sdk").should("contain", "We respect your personal privacy");
        cy.get("#onetrust-accept-btn-handler").click();
    })

    it(" Test 5 Go to Case Study from Service", () => {
        cy.get("#w-dropdown-toggle-0").click();
        cy.get('a[data-w-id="3bb5188b-bc1c-80b7-1ec2-7086dc1f118b"]').click();
        cy.title().should("eq", "Services");
        cy.get('a[href="https://blog.incubyte.co/blog/monnai-case-study/"]').click();

    })

    it(" Test 6 Go to Client Success", () => {
        cy.get('a[href="/client-success"].navbar---each-link').should("contain", "Client Success").click();
        cy.title().should("eq", "Client Success");
        cy.get('a[href="https://blog.incubyte.co/blog/global-case-study/"]').click();
        cy.get('.big-btn.btn.btn-sm.ml-2.mr-2').click();
        fillform1();


    })

    it("Test 7 Go to about us from SOAK IN OUR PHILOSOPHY button", () => {
        cy.get(".close.w-button").click();
    })
    it("Test 8 Useful Link", () => {
        cy.get("a[href='/'].menu-link").should("contain", "Home").click();
        cy.get("a[href='/events'].menu-link").should("contain", "Community").click();
        cy.title().should("eq", "Events");
        cy.get("a[href='/careers'].menu-link").should("contain", "Careers").click();
    })

})


function fillform() {

    cy.get('input[id = "first-name-6"]').type(mydata1.name);
    cy.get('input[id = "last-name-6"]').type(mydata1.lastname);
    cy.get('input[id = "company-name-8"]').type(mydata1.companyname);
    cy.get('input[id = "job-title-6"]').type(mydata1.position);
    cy.get('input[id = "email-address-6"]').type(mydata1.email);
    cy.get('input[id = "phone-number-4"]').type(mydata1.number);
    cy.get('textarea[id = "description-6"]').type(mydata1.body);
    cy.get('input[id = "checkbox"]').check();
}

function fillform1() {


    cy.get("#Company-Name-2").type(mydata1.companyname);
    cy.get("#Name-2").type(mydata1.name);
    cy.get("#Email-5").type(mydata1.email);
    cy.get("#Something-else-2").type(mydata1.body);
}