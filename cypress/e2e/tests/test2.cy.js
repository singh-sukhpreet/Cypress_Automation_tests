/// <reference types="cypress" />

describe('kitchen sink-2', () => {
    const actualTitle = 'Cypress.io: Kitchen Sink'

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('As a user, I can clear the input value', () => {
        cy.get('.action-clear').type('Input Random Text')
        .should('have.value', 'Input Random Text')
        cy.get('.action-clear').clear().should('have.value', '')
    })
  
    it('As a user, I can check an element', () => {
        cy.get('.action-checkboxes [type="checkbox"]')
        .not('[disabled]')
        .check();
        cy.get('.action-checkboxes [type="checkbox"]').should('be.checked');
    })

    it('As a user, I can uncheck an element', () => {
        cy.get('.action-check [type="checkbox"]')
        .check('checkbox1')
        .uncheck('checkbox1').should('not.be.checked')
    });  
})