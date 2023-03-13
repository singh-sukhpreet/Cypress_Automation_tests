/// <reference types="cypress" />

describe('kitchen sink-8', () => {
    
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/connectors')
    })
  
    it('To iterate over the elements', () => {
        cy.get('.connectors-each-ul>li')
        .each(function($el, index, $list){
          console.log($el, index, $list)
        })
    });

    it('To invoke a function on a current subject', () => {
        cy.get('.connectors-div').should('be.hidden')
        // call the jquery method 'show' on the 'div.container'
        .invoke('show')
        .should('be.visible')
        
    });

})