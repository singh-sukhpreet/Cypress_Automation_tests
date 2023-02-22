/**
 * 1. As a user, I can double click on element
 * 2. As a user, I can right click on element
 */
/// <reference types="cypress" />
import selectors from './../../selectors/selectors.json'
describe('kitchen sink-5', () => {

    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    it('As a user, I can double click on element', () => {
        cy.get(selectors.dblClick).dblclick().should('not.be.visible');
        cy.get(selectors.hiddenInput).should('be.visible');
        cy.get(selectors.hiddenInput).clear().type("Input random text");
        cy.get(selectors.hiddenInput).should('have.value',"Input random text")
    })
  
    it('As a user, I can right click on element', () => {
        cy.get(selectors.rightClickBtn).rightclick().should('not.be.visible');
        cy.get(selectors.rightClickInput).clear().type("Input random text");
        cy.get(selectors.rightClickInput).should('have.value',"Input random text")
        
    })

})