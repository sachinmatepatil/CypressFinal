/// <reference types="cypress" />

describe('Checkboxws handling', () => {
it('should check check boxes', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    cy.get("#checkboxes > label > input[value='option-1']").check().should('be.checked').and('have.value', 'option-1')
    cy.get("#checkboxes > label > input[value='option-3']").uncheck().should('not.be.checked').and('have.value', 'option-3')
}),
it('check all checkboxes as check', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    cy.get("#checkboxes > label > input[type='checkbox']").check().should('be.checked')
})
})