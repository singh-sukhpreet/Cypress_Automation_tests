/// <reference types="cypress" />

describe('kitchen sink-6', () => {

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('Trigger a DOM element', () => {
        cy.get('.trigger-input-range').invoke('val', 25)
          .trigger('change');
        cy.get('input[type=range]').siblings('p')
          .should('have.text', '25')
    })

    it('Scroll into view , to check the button ', () => {
        cy.get('#scroll-horizontal button').should('not.be.visible')

        cy.get('#scroll-horizontal button').scrollIntoView().should('be.visible')
    });

})