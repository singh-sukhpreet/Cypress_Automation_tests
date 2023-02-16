/// <reference types="cypress" />

describe('infinite scroll', () => {
    
    let flag = true;
    beforeEach(() => {
        
        cy.waitForNetworkIdlePrepare({
          method: '*',
          alias: 'all',
          pattern: '**/infinite-scroll/**',
        })
          
      cy.visit('https://www.awwwards.com/websites/infinite-scroll/')
    })
  
    it('As a user, I can infinite scroll', () => {
        
            cy.get(".card-site__info strong a").then($button => {
                if ($button.text().includes('devonainteractive')){
                  flag = false
                }
                else{
                    cy.waitForNetworkIdle('@all', 2000, { timeout: 6000 })
                    cy.window().scrollTo('bottom')
                    cy.intercept('GET','**/infinite-scroll/**').as('scroll')
                    cy.wait('@scroll')
                }
            })
    })
  
})