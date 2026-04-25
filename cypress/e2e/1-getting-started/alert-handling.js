/// <reference types="cypress" />

describe("alert handling", () => {
    it("JavaScript alert", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke(
            'removeAttr', 'target'
        ).click({force: true})
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    }),
    it("Modal popup", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke(
            'removeAttr', 'target'
        ).click({force: true})
        cy.get('#button2').click()
        cy.get('#myModal').should('be.visible')
        cy.get('.modal-footer > .btn').click()
    }),
    it("JavaScript confirm box", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke(
            'removeAttr', 'target'
        ).click({force: true})
        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return true
        })
    }),
    it("JAvascript confirm box using stub", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke(
            'removeAttr', 'target'
        ).click({force: true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })
    })
})