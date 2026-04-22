/// < reference types="cypress" />


describe("Automation store", () => {
    it("Should be able to add products to cart and complete checkput process", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function(getTextItem){
            cy.log("Details as follows:" + getTextItem.text())
        })

    })
})
