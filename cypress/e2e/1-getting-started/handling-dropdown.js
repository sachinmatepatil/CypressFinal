/// <reference types="cypress" />

describe('Handling dropdowns', () => {
    it('select option from doropdown', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
    })
})