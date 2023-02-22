/**
 * 1. As a user, I can Navigate back and forward and take screenshot
 */
/// <reference types="cypress" />

describe('kitchen sink-1', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
    })
  
    it('As a user, I can Navigate back and forward and take screenshot', () => {
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