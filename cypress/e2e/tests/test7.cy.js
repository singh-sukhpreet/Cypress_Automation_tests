/// <reference types="cypress" />

describe('kitchen sink-7', () => {
    const email = 'test@gmail.com'
    const password = 'ABCabc123'
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/querying')
    })
  
    it('To find elements within a specific DOM element', () => {
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:first').type(email).should('have.value',email)
          })

        cy.get('.query-form').within(() => {
          cy.get('input:last').should('have.attr', 'placeholder', 'Password')
          cy.get('input:last').type(password).should('have.value',password)
        })
    });

    it('To find elements by their content', () => {
        cy.get('#querying')
          .contains('ul', 'oranges')
          .should('have.class', 'query-list')

        cy.get('.query-button')
          .contains('Save Form')
          .should('have.class', 'btn')
    });

})