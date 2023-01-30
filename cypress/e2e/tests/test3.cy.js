/// <reference types="cypress" />

describe('kitchen sink-2', () => {
    const actualTitle = 'Cypress.io: Kitchen Sink'

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('Clear local storage', () => {
        cy.title().should('contain', 'Kitchen Sink');
        cy.clearLocalStorage()
        cy.title().should('eq', actualTitle)
    })
  
    it('Clear session storage', () => {
        cy.title().should('contain', 'Kitchen Sink');
        cy.clearAllSessionStorage()
        cy.title().should('eq', actualTitle)
    })

})