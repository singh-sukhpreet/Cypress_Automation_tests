/// <reference types="cypress" />

describe('kitchen sink-1', () => {
    const actualTitle = 'Cypress.io: Kitchen Sink'

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('As a user, I can check the title of page', () => {
        cy.title().should('contain', 'Kitchen Sink');
        cy.title().should('eq', actualTitle)
    })
  
    it('As a user, I can focus the element', () => {
        cy.get('.action-focus').focus()
        .should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    })

    it('As a user, I can blur on a DOM element,', () => {
        cy.get('.action-blur').type('About to blur').blur()
        .should('have.class', 'error')
        .prev().should('have.attr', 'style', 'color: red;')
    });  
})