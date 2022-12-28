/// <reference types="cypress" />

describe('kitchen sink-1', () => {
    const actualTitle = 'Cypress.io: Kitchen Sink'

    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
    })
  
    it('As a user, I can check the title of page', () => {
        cy.title().should('contain', 'Kitchen Sink');
        cy.screenshot()
        cy.visit('https://example.cypress.io/commands/actions')
        cy.title().should('contain', 'Kitchen Sink');
        cy.screenshot()
        cy.go('back')
        cy.url().should('not.contain','actions')
        cy.go('forward')
        cy.url().should('contain','actions')
    })
  
})