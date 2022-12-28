/// <reference types="cypress" />

describe('kitchen sink-5', () => {
    const actualTitle = 'Cypress.io: Kitchen Sink'

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('As a user, I can double click on element', () => {
        cy.get('.action-div').dblclick().should('not.be.visible');
        cy.get('.action-input-hidden').should('be.visible');
        cy.get('.action-input-hidden').clear().type("Input random text");
        cy.get('.action-input-hidden').should('have.value',"Input random text")
    })
  
    it('As a user, I can right click on element', () => {
        cy.get('.rightclick-action-div').rightclick().should('not.be.visible');
        cy.get('.rightclick-action-input-hidden').clear().type("Input random text");
        cy.get('.rightclick-action-input-hidden').should('have.value',"Input random text")
        
    })

})