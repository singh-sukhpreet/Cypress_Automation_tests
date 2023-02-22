/**
 * 1. As a user, I can clear the input value
 * 2. As a user, I can check an element
 * 3. As a user, I can uncheck an element
 */

/// <reference types="cypress" />
import selectors from './../../selectors/selectors.json'
describe('kitchen sink-2', () => {

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('As a user, I can clear the input value', () => {
        cy.get(selectors.actionClear).type('Input Random Text')
        .should('have.value', 'Input Random Text')
        cy.get(selectors.actionClear).clear().should('have.value', '')
    })
  
    it('As a user, I can check an element', () => {
        cy.get(selectors.checkBox)
        .not('[disabled]')
        .check();
        cy.get(selectors.checkBox).should('be.checked');
    })

    it('As a user, I can uncheck an element', () => {
        cy.get(selectors.checkBox)
        .check('checkbox1')
        .uncheck('checkbox1').should('not.be.checked')
    });  
})