/// < reference types="cypress" />


describe("Automation store", () => {
    it("Should be able to add products to cart and complete checkput process", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function(getTextItem){
            cy.log("Details as follows:" + getTextItem.text())
        })

    }),
    it("Test browser navigation", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='/index.php?rt=content/contact']").click({ force: true })
        cy.get("h1").should("contain.text", "Contact Us")
        cy.go("back")
        cy.get('.welcome_msg > h4').should("contain.text", "Welcome to the Automation Test Store!")
        cy.reload()
        cy.go("forward")
        cy.get("h1").should("contain.text", "Contact Us")
    }),
    it.only("Exerise for navigation", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='index.php?rt=content/sitemap']").click()
        cy.url().should("include", "sitemap")
        cy.go("back")
        cy.get('.welcome_msg > h4').should("contain.text", "Welcome to the Automation Test Store!")
        cy.reload
    })
})
