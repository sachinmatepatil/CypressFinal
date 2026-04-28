/// <reference  types="cypress" />

describe('Radio buttons example test', () => {
    it('should select the first radio button', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#radio-buttons').find("input[type='radio']").first().check().should('be.checked')
    }),
    it('should select all the radio buttons', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#radio-buttons').find("input[type='radio']").each(($el) => {
            cy.wrap($el).check().should('be.checked')
})
})
})