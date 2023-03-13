/// <reference types="cypress" />

describe('write file', () => {
   
    it('write files cypress', () => {
        
    
        cy.request('https://jsonplaceholder.cypress.io/users')
          .then((response) => {
            cy.writeFile('cypress/fixtures/users.json', response.body)
          })
        cy.fixture('users').should((users) => {
          expect(users[0].name).to.exist
        })
    });
})