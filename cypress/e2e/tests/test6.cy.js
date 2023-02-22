/**
 * 1. As a user, I can Trigger a DOM element
 * 2. As a user, I can Scroll into view , to check the button
 */
/// <reference types="cypress" />
import selectors from './../../selectors/selectors.json'
describe('kitchen sink-6', () => {

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('Trigger a DOM element', () => {
        cy.get(selectors.triggerRange).invoke('val', 25)
          .trigger('change');
        cy.get(selectors.inputRange).siblings('p')
          .should('have.text', '25')
    })

    it('Scroll into view , to check the button', () => {
        cy.get(selectors.hScroll).should('not.be.visible')

        cy.get(selectors.hScroll).scrollIntoView().should('be.visible')
    });

})