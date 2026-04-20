/// <reference types="cypress" />

describe("Contact us form", () => {
    it("Should be able to submit form successfully", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get("input[name='first_name']").type('Sachin')
        cy.get("input[name='last_name']").type('Mate')
        cy.get("input[name='email']").type("sachin.mate@example.com")
        cy.get("textarea[name='message']").type("This is a test message.")
        cy.get("input[type='submit']").click()
        cy.get("h1").should("have.text","Thank You for your Message!")
    }),
    it.only("show error message when form is submitted with empty fields", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get("input[type='submit']").click()
        cy.get("body").should("contain.text","Error: all fields are required")
    })

})