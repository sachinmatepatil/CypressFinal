/// <reference types="cypress" />

describe('Handling dropdowns', () => {
    it('select option from doropdown', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').should('have.value', 'jquery')
    })
})